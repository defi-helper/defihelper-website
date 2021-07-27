import React from 'react';

import { Typography, ButtonBase } from 'src/common';
import { useVotingActionSelectStyles } from './voting-action-select.styles';

export type VotingActionSelectProps = {
  options?: string[];
  title?: React.ReactNode;
  onChange?: (option: string) => void;
};

export const VotingActionSelect: React.FC<VotingActionSelectProps> = (
  props
) => {
  const { options = [] } = props;
  const classes = useVotingActionSelectStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        {props.title}
      </Typography>
      <div className={classes.optionsWrap}>
        <div className={classes.options}>
          {options.map((option) => (
            <ButtonBase
              className={classes.option}
              type="button"
              onClick={() => props.onChange?.(option)}
              key={option}
            >
              <Typography variant="h5" component="span">
                {option}
              </Typography>
            </ButtonBase>
          ))}
        </div>
      </div>
    </div>
  );
};
