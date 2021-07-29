import { useFormik } from 'formik';
import React, { useCallback, useState } from 'react';
import { useToggle } from 'react-use';
import { useHistory } from 'react-router-dom';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';

import {
  Button,
  useGovernorContract,
  ButtonBase,
  Modal,
  Head,
  estimateGas
} from 'src/common';
import { LandingLayout } from 'src/layouts';
import { URLS } from 'src/router/urls';
import { VotingInput, VotingMediumEditor, VotingActionList } from '../common';
import {
  VotingAddAction,
  VotingAddActionFormValues
} from '../voting-add-action';
import { useVotingCreateProposalStyles } from './voting-create-proposal.styles';

type FormValues = {
  actions: VotingAddActionFormValues[];
  title: string;
  description: string;
  value: string;
};

const joinAction = ({ input, ...action }: VotingAddActionFormValues) => {
  const joinedInput = input
    .map(({ type, name }) => [type, name].join(''))
    .join('');

  return [Object.values(action).join(''), joinedInput].join('');
};

export const VotingCreateProposal: React.FC = () => {
  const governorContract = useGovernorContract();
  const classes = useVotingCreateProposalStyles();
  const { library, account } = useWeb3React<Web3>();
  const [addActionOpen, toggleAddAction] = useToggle(false);
  const [editAction, setEditAction] =
    useState<VotingAddActionFormValues | null>(null);
  const history = useHistory();

  const formik = useFormik<FormValues>({
    initialValues: {
      actions: [],
      title: '',
      description: '',
      value: ''
    },

    onSubmit: async (formValues, { resetForm }) => {
      if (!library || !governorContract || !account) return;

      const callDatas = formValues.actions.flatMap(({ input }) => {
        const [types, paramValues] = input.reduce<[string[], string[]]>(
          ([params, values], { type, value }) => {
            params.push(type);
            values.push(value);

            return [params, values];
          },
          [[], []]
        );

        return library.eth.abi.encodeParameters(types, paramValues);
      });

      const signatures = formValues.actions.map(
        ({ functionSig, input }) =>
          `${functionSig}(${input.map(({ type }) => type).join()})`
      );

      const values = formValues.actions.map(({ payable = 0 }) => payable);

      const addresses = formValues.actions.map(({ address = '' }) => address);

      const description = `#${formValues.title}\n${formValues.description}`;

      const propose = governorContract.methods.propose(
        addresses,
        values,
        signatures,
        callDatas,
        description
      );

      await propose.send({
        from: account,
        gas: await estimateGas(propose, { from: account })
      });

      resetForm();
      history.push(URLS.voting.list);
    }
  });

  const { setFieldValue } = formik;

  const handleChangeActions = useCallback(
    (actions) => setFieldValue('actions', actions),
    [setFieldValue]
  );

  const handleEditAction = useCallback(
    (actionToEdit: VotingAddActionFormValues) => {
      setEditAction(actionToEdit);

      toggleAddAction(true);
    },
    [toggleAddAction]
  );

  const handleSubmitAction = useCallback(
    (formValues: VotingAddActionFormValues) => {
      const actions = formik.values.actions.map((action) => {
        if (joinAction(action) === joinAction(formValues)) {
          return formValues;
        }

        return action;
      });

      if (!editAction) {
        actions.push(formValues);
      }

      setFieldValue('actions', actions);

      setEditAction(null);
    },
    [setFieldValue, formik.values.actions, editAction]
  );

  const handleSubmitActions = useCallback(
    (actions: VotingAddActionFormValues[]) => {
      setFieldValue('actions', [...formik.values.actions, ...actions]);
    },
    [setFieldValue, formik.values.actions]
  );

  const handleCloseAddAction = useCallback(() => {
    toggleAddAction(false);

    setEditAction(null);
  }, [toggleAddAction]);

  return (
    <>
      <Head title="Create proposal" />
      <LandingLayout>
        <form
          className={classes.form}
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className={classes.inputs}>
            <VotingInput
              name="title"
              label="Enter the name of proposal"
              value={formik.values.title}
              disabled={formik.isSubmitting}
              onChange={formik.handleChange}
            />
            {!!formik.values.actions.length && (
              <VotingActionList
                actions={formik.values.actions}
                onAddAnother={toggleAddAction}
                onEdit={handleEditAction}
                onChange={handleChangeActions}
              />
            )}
            {!formik.values.actions.length && (
              <ButtonBase
                type="button"
                className={classes.button}
                onClick={toggleAddAction}
              >
                +Add Action
              </ButtonBase>
            )}
            <VotingMediumEditor
              value={formik.values.description}
              disabled={formik.isSubmitting}
              label="Write a description"
              onChange={(value) => formik.setFieldValue('description', value)}
            />
          </div>
          <Button
            type="submit"
            className={classes.submit}
            disabled={formik.isSubmitting}
            loading={formik.isSubmitting}
          >
            Submit proposal
          </Button>
        </form>
        <Modal onClose={handleCloseAddAction} open={addActionOpen}>
          <VotingAddAction
            onClose={handleCloseAddAction}
            editAction={editAction}
            onSubmit={handleSubmitAction}
            onSubmitActions={handleSubmitActions}
          />
        </Modal>
      </LandingLayout>
    </>
  );
};
