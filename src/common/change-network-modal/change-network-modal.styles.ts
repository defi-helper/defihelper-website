import { createUseStyles } from 'react-jss';

export const useChangeNetworkModalStyles = createUseStyles(
  () => ({
    modal: {
      '& div:nth-child(2)': {
        paddingBottom: 0
      }
    },

    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },

    title: {
      marginTop: 'auto'
    },

    img: {
      marginTop: 'auto',
      maxWidth: '100%'
    }
  }),
  {
    name: 'ChangeNetworkModal'
  }
);
