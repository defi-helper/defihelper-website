import { createUseStyles } from 'react-jss';

export const usePieIconStyles = createUseStyles(
  () => ({
    root: {
      transform: 'rotate(-90deg)',
      borderRadius: '50%'
    },

    circle: {}
  }),
  {
    name: 'PieIcon'
  }
);
