import React from 'react';

import { Plate, Typography } from 'src/common';
import { useVotingInfoDecisionStyles } from './voting-info-decision.styles';
import { DECISION_MAKING } from '../constants';

export type VotingInfoDecisionProps = {
  className?: string;
};

export const VotingInfoDecision: React.FC<VotingInfoDecisionProps> = (
  props
) => {
  const classes = useVotingInfoDecisionStyles();

  return (
    <div className={props.className}>
      <Plate withoutBorder color="grey" className={classes.decision}>
        {DECISION_MAKING.map((decisionItem) => (
          <div key={decisionItem.title} className={classes.decisionCard}>
            <Typography variant="h3" className={classes.decisionCardTitle}>
              {decisionItem.title}
            </Typography>
            <ul className={classes.decisionCardList}>
              {decisionItem.text.map((text) => (
                <li key={text} className={classes.decisionCardListItem}>
                  <Typography variant="body1">{text}</Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Plate>
    </div>
  );
};
