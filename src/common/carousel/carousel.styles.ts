import { createUseStyles } from 'react-jss';

export const useCarouselStyles = createUseStyles(
  () => ({
    root: {
      marginLeft: -16,
      marginRight: -16
    },

    slide: {
      padding: '1px 8px'
    },

    dots: {
      listStyle: 'none',
      margin: [16, 0, 0],
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& .slick-active $dot': {}
    },

    dot: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      border: `1px solid black`,
      margin: [0, 4]
    }
  }),
  {
    name: 'Carousel'
  }
);
