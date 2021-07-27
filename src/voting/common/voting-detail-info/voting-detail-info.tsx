import clsx from 'clsx';
import React from 'react';

import { ReactComponent as CheckedIcon } from 'src/assets/icons/checked.svg';
import { BN, humanizeNumeral, Typography } from 'src/common';
import { useVotingDetailInfoStyles } from './voting-detail-info.styles';

export type VotingDetailInfoProps = {
  variant: 'voteFor' | 'voteAgainst';
  active?: boolean;
  onAddresses?: () => void;
  count?: BN;
  total?: BN;
};

export const VotingDetailInfo: React.FC<VotingDetailInfoProps> = (props) => {
  const percentageBN = props.count?.div(props.total ?? 0).multipliedBy(100);

  const percentage = percentageBN?.isFinite()
    ? percentageBN.integerValue().toNumber()
    : 0;
  const classes = useVotingDetailInfoStyles({
    percentage
  });

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: props.active
      })}
    >
      {props.active && (
        <Typography variant="body1" component="div" className={classes.chip}>
          <CheckedIcon className={classes.checkedIcon} />
          voted
        </Typography>
      )}
      <Typography variant="h3" component="div">
        {percentage}% {props.children}
      </Typography>
      <div className={clsx(classes.separator, classes[props.variant])} />
      <Typography variant="body1" component="div">
        {humanizeNumeral(props.count)} votes
      </Typography>
    </div>
  );
};
