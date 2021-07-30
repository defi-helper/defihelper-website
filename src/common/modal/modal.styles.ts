import { createUseStyles } from 'react-jss';

export const useModalStyles = createUseStyles(
  () => ({
    root: {
      position: 'fixed',
      zIndex: 9999,
      overflowX: 'hidden',
      overflowY: 'scroll',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },

    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },

    child: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 340
    }
  }),
  {
    name: 'Modal'
  }
);
