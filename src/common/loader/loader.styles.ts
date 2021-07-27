import { createUseStyles } from 'react-jss';

export const useLoaderStyles = createUseStyles(
  {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      color: 'inherit'
    }
  },
  {
    name: 'Loader'
  }
);
