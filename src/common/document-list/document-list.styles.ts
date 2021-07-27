import { createUseStyles } from 'react-jss';

export const useDocumentListStyles = createUseStyles(
  () => ({
    title: {
      maxWidth: 1200,
      margin: '0 auto 40px'
    },

    row: {
      marginTop: 64,
      display: 'grid',
      gridGap: 44,
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    }
  }),
  {
    name: 'DocumentList'
  }
);
