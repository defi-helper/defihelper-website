import clsx from 'clsx';
import React from 'react';

import { ButtonBase, Typography, Loader } from 'src/common';
import { useVotingButtonStyles } from './voting-button.styles';

export type VotingButtonProps = {
  variant: 'voteFor' | 'voteAgainst';
  loading?: boolean;
  onClick?: () => void;
};

export const VotingButton: React.FC<VotingButtonProps> = (props) => {
  const classes = useVotingButtonStyles();

  return (
    <ButtonBase
      onClick={props.onClick}
      className={clsx(
        classes.root,
        classes[props.variant],
        props.loading && classes.loading
      )}
    >
      <Typography variant="h4" as="span">
        {props.loading && <Loader width="1em" height="1em" strokeWidth={5} />}
        {!props.loading && props.children}
      </Typography>
    </ButtonBase>
  );
};
