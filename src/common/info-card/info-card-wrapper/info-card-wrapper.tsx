import clsx from 'clsx';
import React from 'react';

import { Button } from 'src/common/button';
import { Typography } from 'src/common/typography';
import { useInfoCardWrapperStyles } from './info-card-wrapper.styles';

export type InfoCardWrapperProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  button?: React.ReactNode;
  onClick?: () => void;
  success?: boolean;
  className?: string;
};

export const InfoCardWrapper: React.FC<InfoCardWrapperProps> = (props) => {
  const classes = useInfoCardWrapperStyles();

  return (
    <div className={clsx(classes.wrap, props.className)}>
      <div className={classes.title}>
        <Typography
          variant="h4"
          align="center"
          as="div"
          className={classes.decoratedText}
        >
          {props.title}
        </Typography>
        {props.subtitle && (
          <Typography variant="h4" align="center" as="div">
            {props.subtitle}
          </Typography>
        )}
      </div>
      {props.children}
      {props.button && (
        <Button color="primary" onClick={props.onClick}>
          {props.button}
        </Button>
      )}
    </div>
  );
};
