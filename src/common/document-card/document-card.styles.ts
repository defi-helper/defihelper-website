import { createUseStyles } from 'react-jss';

export const useDocumentCardStyles = createUseStyles(
  () => ({
    root: {
      position: 'relative',
      zIndex: 1
    },

    card: {
      border: `1px solid black`,
      borderRadius: 16,
      height: 240,
      padding: 16,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: 'black',
      color: 'inherit',
      textDecoration: 'none',

      '&:after, &:before': {
        content: '" "',
        position: 'absolute',
        left: -1,
        bottom: 0,
        border: 'inherit',
        borderRadius: 'inherit',
        backgroundColor: 'inherit'
      },

      '&:before': {
        right: 32,
        zIndex: -2,
        top: -20
      },

      '&:after': {
        right: 16,
        zIndex: -1,
        top: -10
      }
    }
  }),
  {
    name: 'DocumentCard'
  }
);
