import React from 'react';
import { useMount } from 'react-use';

import { Loader } from 'src/common';
import { useVotingManualStyles } from './voting-manual.styles';

export type VotingManualProps = {
  onManual: () => void;
};

export const VotingManual: React.FC<VotingManualProps> = (props) => {
  const classes = useVotingManualStyles();

  useMount(props.onManual);

  return (
    <div className={classes.root}>
      <Loader className={classes.loader} />
    </div>
  );
};
