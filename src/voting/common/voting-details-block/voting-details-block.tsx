import React from 'react';

import { Plate, Skeleton, Typography, LinkIfAccount } from 'src/common';
import { EventDetail } from '../voting.types';
import { useVotingDetailsBlockStyles } from './voting-details-block.styles';

export type VotingDetailsBlockProps = {
  loading: boolean;
  details?: EventDetail[];
};

export const VotingDetailsBlock: React.FC<VotingDetailsBlockProps> = (
  props
) => {
  const classes = useVotingDetailsBlockStyles();

  return (
    <div className={classes.root}>
      {props.loading && <Skeleton height={192} />}
      {!props.loading && (
        <Plate className={classes.details}>
          <>
            {props.details?.map((detail, index) => {
              const callData = detail.callData.split(',').map((data, id) => ({
                id: `${id}-${index}`,
                data: <LinkIfAccount>{data.trim()}</LinkIfAccount>
              }));

              const key = `${detail.target}-${index}`;

              return (
                <Typography
                  key={key}
                  variant="h5"
                  component="p"
                  className={classes.line}
                >
                  <span className={classes.lineId}>{index + 1}</span>
                  <span>
                    <LinkIfAccount>{detail.target.trim()}</LinkIfAccount>.
                    {detail.functionSig}(
                    {callData.map(({ data, id }, i) => (
                      <React.Fragment key={id}>
                        {data}
                        {callData.length - 1 === i ? '' : ', '}
                      </React.Fragment>
                    ))}
                    )
                  </span>
                </Typography>
              );
            })}
          </>
        </Plate>
      )}
    </div>
  );
};
