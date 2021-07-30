import clsx from 'clsx';
import React from 'react';

import { Button, Plate, Typography, Skeleton, numberArray } from 'src/common';
import { useVotingInfoCardStyles } from './voting-info-card.styles';

export type VotingInfoCardProps = {
  className?: string;
  title: string;
  subtitle: string;
  onClick: () => void;
  buttonTitle: string;
  percent?: string;
  description?: string;
  loading: boolean;
};

export const VotingInfoCard: React.VFC<VotingInfoCardProps> = (props) => {
  const classes = useVotingInfoCardStyles({
    percent: Number(props.percent ?? 0)
  });

  return (
    <Plate className={classes.root}>
      <Typography variant="h2" className={classes.title} align="center">
        {props.loading ? (
          <Skeleton className={classes.titleSkeleton} />
        ) : (
          props.title
        )}
      </Typography>
      {props.loading ? (
        <Skeleton className={classes.progressSkeleton} />
      ) : (
        props.percent && <div className={classes.progress} />
      )}
      <Typography variant="body1" className={classes.subtitle} align="center">
        {props.loading ? (
          <Skeleton className={classes.subtitleSkeleton} />
        ) : (
          props.subtitle
        )}
      </Typography>
      {props.loading ? (
        <Skeleton className={clsx(classes.buttonSkeleton, classes.button)} />
      ) : (
        <Button className={classes.button} onClick={props.onClick}>
          {props.buttonTitle}
        </Button>
      )}
      <Typography
        variant="body1"
        align="center"
        className={classes.description}
      >
        {props.loading
          ? numberArray(3).map((num) => (
              <Skeleton key={num} className={classes.descriptionSkeleton} />
            ))
          : props.description}
      </Typography>
    </Plate>
  );
};
