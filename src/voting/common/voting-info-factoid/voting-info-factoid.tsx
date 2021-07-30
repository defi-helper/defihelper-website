import React from 'react';

import { Plate, Typography } from 'src/common';
import { FACTOID } from '../constants';
import { useVotingInfoFactoidStyles } from './voting-info-factoid.styles';

export type VotingInfoFactoidProps = {
  className?: string;
};

export const VotingInfoFactoid: React.FC<VotingInfoFactoidProps> = (props) => {
  const classes = useVotingInfoFactoidStyles();

  return (
    <div className={props.className}>
      <Plate color="grey" withoutBorder className={classes.plate}>
        <div className={classes.factoidText}>
          <Typography variant="h2">
            65% of all 100,000,000 BAG reserved for protocol usage and future
            governance participation incentives.
          </Typography>
          <ul className={classes.factoid}>
            {FACTOID.map((fact) => (
              <li className={classes.factoidItem} key={fact.text}>
                <Typography
                  variant="body1"
                  className={classes.factoidItemContent}
                >
                  <Typography variant="inherit">{fact.percent}</Typography>{' '}
                  <Typography variant="inherit">{fact.text}</Typography>
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Plate>
    </div>
  );
};
