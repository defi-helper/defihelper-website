import React from 'react';
import clsx from 'clsx';
import Slider from 'react-slick';

import './slick.css';
import { ButtonBase } from '../button-base';
import * as styles from './carousel.css';

export type CarouselProps = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

export const Carousel: React.FC<CarouselProps> = (props) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '15px',
    arrows: false,
    centerMode: true,
    outerEdgeLimit: true,
    dots: true,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className={styles.dots}>{dots}</ul>
      </div>
    ),
    customPaging: () => <ButtonBase className={styles.dot} />
  };

  const renderChildren = (child: React.ReactElement) => {
    return (
      <div className={styles.slide}>
        {React.cloneElement(child, {
          ...child.props,
          className: clsx(child.props.className)
        })}
      </div>
    );
  };

  return (
    <Slider {...settings} className={clsx(styles.root, props.className)}>
      {React.Children.map(props.children, renderChildren)}
    </Slider>
  );
};
