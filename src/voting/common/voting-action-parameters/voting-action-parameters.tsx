import { useFormikContext } from 'formik';
import React, { useCallback, useRef, useState } from 'react';
import { useToggle } from 'react-use';

import {
  Button,
  ContractMethodInput,
  ButtonBase,
  ContractMethod,
  Input,
  Typography
} from 'src/common';
import { useVotingActionParametersStyles } from './voting-action-parameters.styles';

export type VotingAddActionFormValues = {
  contract?: number | string;
  functionSig: string;
  input: (ContractMethodInput & { value: string })[];
  payable?: number;
  address?: string;
};

export type VotingActionParametersProps = {
  title: React.ReactNode;
  contractMethod?: ContractMethod;
};

type Options = {
  inputName: string;
  inputType: string;
};

const powOptions = [6, 8, 18];

export const VotingActionParameters: React.FC<VotingActionParametersProps> = (
  props
) => {
  const formik = useFormikContext<VotingAddActionFormValues>();
  const classes = useVotingActionParametersStyles();
  const [select, toggleSelect] = useToggle(false);

  const [customInput, setCustomInput] = useState('');

  const inputIndexRef = useRef<number | null>(null);

  const handleToggleSelect = useCallback(
    (inputIndex: number) => () => {
      toggleSelect();
      inputIndexRef.current = inputIndex;
    },
    [toggleSelect]
  );

  const { setFieldValue, values } = formik;

  const handleChange = useCallback(
    (options: Options) =>
      ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
        setFieldValue(currentTarget.name, {
          value: currentTarget.value,
          name: options.inputName,
          type: options.inputType
        });
      },
    [setFieldValue]
  );

  const handleSelect = useCallback(
    (powOption: number) => () => {
      if (inputIndexRef.current === null) return;

      const contractInput = props.contractMethod?.inputs[inputIndexRef.current];
      const formikInput = values.input[inputIndexRef.current];

      const input = {
        name: contractInput?.name ?? '',
        type: contractInput?.type ?? '',
        value: [formikInput?.value || 1, ...Array(powOption).fill(0)].join('')
      };

      toggleSelect(false);

      setFieldValue(`input.${inputIndexRef.current}`, input);
    },
    [toggleSelect, props.contractMethod, values.input, setFieldValue]
  );

  return (
    <>
      {select ? (
        <>
          {powOptions.map((powOption) => (
            <ButtonBase
              key={powOption}
              type="button"
              className={classes.option}
              onClick={handleSelect(powOption)}
            >
              10<sup>{powOption}</sup>
            </ButtonBase>
          ))}
          <Input
            name={`input.${inputIndexRef.current}`}
            variant="small"
            className={classes.customInput}
            value={customInput}
            placeholder="Enter custom..."
            onChange={({ currentTarget }) =>
              setCustomInput(currentTarget.value)
            }
            label="Custom"
            type="number"
          />
          <ButtonBase
            type="button"
            className={classes.option}
            onClick={handleSelect(Number(customInput))}
          >
            Add custom
          </ButtonBase>
        </>
      ) : (
        <>
          <Typography variant="h3" className={classes.title}>
            {props.title}
          </Typography>
          <div className={classes.inputs}>
            {!!props.contractMethod?.inputs.length &&
              props.contractMethod.inputs.map((input, index) => {
                const type = input.type.length ? `(${input.type})` : '';

                const label = [input.name, type].filter(Boolean).join('');

                const inputIndex = `input.${index}`;

                return (
                  <div key={input.name} className={classes.inputWrap}>
                    {input.type === 'uint256' && (
                      <ButtonBase
                        type="button"
                        className={classes.addPow}
                        onClick={handleToggleSelect(index)}
                      >
                        +
                      </ButtonBase>
                    )}
                    <Input
                      name={inputIndex}
                      variant="small"
                      className={classes.input}
                      value={formik.values.input[index]?.value ?? ''}
                      placeholder={`Enter ${input.name}...`}
                      onChange={handleChange({
                        inputName: input.name,
                        inputType: input.type
                      })}
                      label={label}
                    />
                  </div>
                );
              })}
            {props.contractMethod?.payable && (
              <Input
                label="Value"
                name="payable"
                variant="small"
                value={formik.values.payable ?? 0}
                placeholder="Enter value..."
                onChange={formik.handleChange}
                className={classes.input}
                type="text"
              />
            )}
          </div>
          <Button type="submit" className={classes.button}>
            Add action
          </Button>
        </>
      )}
    </>
  );
};
