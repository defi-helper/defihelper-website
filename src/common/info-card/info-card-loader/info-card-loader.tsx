import React from 'react';

import { Typography } from 'src/common/typography';
import { InfoCardWrapper } from 'src/common/info-card/info-card-wrapper';
import { Loader } from 'src/common/loader';
import { useInfoCardLoaderStyles } from './info-card-loader.styles';

export type InfoCardLoaderProps = {
  className?: string;
};

export const InfoCardLoader: React.FC<InfoCardLoaderProps> = () => {
  const classes = useInfoCardLoaderStyles();

  return (
    <InfoCardWrapper
      title={
        <span className={classes.heading}>
          <Loader width={202} height={156} />
        </span>
      }
    >
      <Typography variant="h3">Processing...</Typography>
    </InfoCardWrapper>
  );
};
