import React from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';

import './slick.css';
import { useCarouselStyles } from './carousel.styles';
import { ButtonBase } from '../button-base';

export type CarouselProps = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

export const Carousel: React.FC<CarouselProps> = (props) => {
  const classes = useCarouselStyles();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '15px',
    arrows: false,
    centerMode: true,
    outerEdgeLimit: true,
    // variableWidth: true,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className={classes.dots}>{dots}</ul>
      </div>
    ),
    customPaging: () => <ButtonBase className={classes.dot} />
  };

  const renderChildren = (child: React.ReactElement) => {
    return (
      <div className={classes.slide}>
        {React.cloneElement(child, {
          ...child.props,
          className: clsx(child.props.className)
        })}
      </div>
    );
  };

  return (
    <Slider {...settings} className={clsx(classes.root, props.className)}>
      {React.Children.map(props.children, renderChildren)}
    </Slider>
  );
};
