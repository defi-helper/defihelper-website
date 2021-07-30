import { createUseStyles } from 'react-jss';
type Theme = any;

export const useVotingDetailsActionStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      margin: '38px 0 86px',
      textAlign: 'center',

      '&:empty': {
        margin: '0 0 86px'
      }
    },

    row: {
      display: 'grid',
      gridGap: 16,
      marginBottom: 32,

      [theme.breakpoints.md()]: {
        gridTemplateColumns: '1fr 1fr'
      }
    }
  }),
  {
    name: 'VotingDetailsAction'
  }
);
