import { createUseStyles } from 'react-jss';

export const useInfoCardWrapperStyles = createUseStyles(
  {
    wrap: {
      maxWidth: 756,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      marginBottom: 32,
      padding: '0 16px'
    },

    title: {
      marginTop: 'auto',
      marginBottom: 'auto'
    },

    decoratedText: {
      position: 'relative',
      zIndex: 1,
      whiteSpace: 'nowrap'
    }
  },
  {
    name: 'InfoCardWrapper'
  }
);
