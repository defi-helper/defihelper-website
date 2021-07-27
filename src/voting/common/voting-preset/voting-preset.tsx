import { useFormik } from 'formik';
import React, { useMemo } from 'react';

import {
  Typography,
  Input,
  Button,
  Network,
  parseContractMethods
} from 'src/common';
import { VotingPreset as VotingPresetItem } from 'src/voting-presets';
import { VotingAddActionFormValues } from '../voting-action-parameters';
import { useVotingPresetStyles } from './voting-preset.styles';

export type VotingPresetProps = {
  preset: VotingPresetItem | null;
  contracts: Record<string, Network['contracts'][number]> | undefined;
  onSubmitActions: (formValues: VotingAddActionFormValues[]) => void;
  onClose: () => void;
};

export const VotingPreset: React.FC<VotingPresetProps> = (props) => {
  const classes = useVotingPresetStyles();

  const actions = useMemo(() => {
    return props.preset?.actions.map((action) => ({
      contract: action.contract,
      functionSig: action.method,
      address: props.contracts?.[action.contract]?.address,
      input: action.input.map((input, index) => {
        const parsedMethods = parseContractMethods(
          props.contracts?.[action.contract]
        );
        const parsedInput = parsedMethods?.[action.method]?.inputs[index];

        return {
          ...input,
          type: input.type,
          value: props.preset?.variables[input.value]?.default ?? input.value,
          presetVariable: input.value,
          name: parsedInput?.name ?? ''
        };
      })
    }));
  }, [props.preset, props.contracts]);

  const formik = useFormik<{ actions: VotingAddActionFormValues[] }>({
    initialValues: {
      actions: actions ?? []
    },

    onSubmit: (formValues) => {
      props.onSubmitActions(formValues.actions);
      props.onClose();
    }
  });

  if (!props.preset) return <></>;

  return (
    <form onSubmit={formik.handleSubmit} className={classes.root} noValidate>
      <Typography variant="h3" className={classes.title}>
        {props.preset.title}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {props.preset.description}
      </Typography>
      <div className={classes.inputs}>
        {actions?.map((action, actionIndex) => (
          <div className={classes.action} key={action.contract}>
            <Typography variant="body1">Action: {actionIndex + 1}</Typography>
            <Typography variant="body1">
              {action.contract}.{action.functionSig}
            </Typography>
            {action.input.map((input, inputIndex) => {
              const id = `${input.type}${actionIndex}${inputIndex}`;
              const currentAction = formik.values.actions[actionIndex] ?? {};

              if (!input.variable) return;

              return (
                <Input
                  key={id}
                  variant="small"
                  className={classes.input}
                  name={`actions.${actionIndex}.input.${inputIndex}.value`}
                  value={currentAction.input?.[inputIndex]?.value}
                  onChange={(event) => {
                    if (!input.variable) return;

                    actions.forEach((formikAction, key) => {
                      formikAction.input.forEach((formikInput, i) => {
                        if (
                          formikInput.variable &&
                          formikInput.presetVariable === input.presetVariable
                        ) {
                          formik.setFieldValue(
                            `actions.${key}.input.${i}.value`,
                            event.currentTarget.value
                          );
                        }
                      });
                    });
                  }}
                  placeholder={`Enter ${input.type}...`}
                />
              );
            })}
          </div>
        ))}
      </div>
      <Button type="submit" className={classes.button}>
        Add action
      </Button>
    </form>
  );
};
