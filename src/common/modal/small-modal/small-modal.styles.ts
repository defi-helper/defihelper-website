import { createUseStyles } from 'react-jss';

export const useSmallModalStyles = createUseStyles(
  () => ({
    root: {
      height: '100%',
      width: '100%',
      position: 'relative'
    },

    header: {
      padding: '8px 8px 0',
      display: 'flex'
    },

    closeButton: {
      width: 40,
      height: 40,
      marginLeft: 'auto',
      display: 'block'
    },

    backButton: {
      width: 40,
      height: 40,

      '& svg': {
        height: 'inherit',
        width: 'inherit'
      }
    },

    content: {
      height: 'calc(100% - 48px)',
      padding: `8px 24px 32px`,
      overflowX: 'auto'
    },

    mobile: {}
  }),
  {
    name: 'SmallModal'
  }
);
