import { createUseStyles } from 'react-jss';

export const useSkeletonStyles = createUseStyles(
  () => ({
    root: {
      display: 'block',
      height: '1.2em',
      opacity: 0.16
    },

    text: {
      marginTop: 0,
      marginBottom: 0,
      height: 'auto',
      borderRadius: `8px`,

      '&:empty:before': {
        content: '"\\00a0"'
      }
    },

    rectangular: {},

    circular: {
      borderRadius: '50%'
    },

    withChildren: {
      '& > *': {
        visibility: 'hidden'
      }
    },

    fitContent: {
      maxWidth: 'fit-content'
    },

    heightAuto: {
      height: 'auto'
    }
  }),
  {
    name: 'Skeleton'
  }
);
