import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

import BondHatIcon from 'src/assets/images/bondappetit-hat.png';
import { URLS } from 'src/router/urls';
import { useLayoutLogoStyles } from './layout-logo.styles';

export type LayoutLogoProps = {
  className?: string;
};

export const LayoutLogo: React.FC<LayoutLogoProps> = (props) => {
  const classes = useLayoutLogoStyles();

  return (
    <Link to={URLS.main} className={clsx(classes.logo, props.className)}>
      <img src={BondHatIcon} alt="" className={classes.img} />
    </Link>
  );
};
