import { createUseStyles } from 'react-jss';

export const usePlateStyles = createUseStyles(
  () => ({
    plate: {
      borderRadius: 16
    },

    grey: {},

    transparent: {},

    withoutBorder: {
      borderColor: 'transparent'
    }
  }),
  {
    name: 'Plate'
  }
);
