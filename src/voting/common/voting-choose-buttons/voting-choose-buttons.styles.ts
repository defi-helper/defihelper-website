import { createUseStyles } from 'react-jss';
import { rgba } from 'polished';

type Theme = any;

export const useVotingChooseButtonsStyles = createUseStyles(
  (theme: Theme) => ({
    button: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      border: `1px solid ${rgba(theme.colors.primary, 0.24)}`,
      boxSizing: 'border-box',
      borderRadius: 16,
      padding: 24,
      height: 160,
      justifyContent: 'flex-start',
      width: '100%',

      '&:not(:last-child)': {
        marginBottom: 16
      },

      [theme.mixins.hover()]: {
        '&:hover': {
          opacity: 1,
          borderColor: theme.colors.primary,
          boxShadow: `0px 0px 0px 1px ${theme.colors.primary}`
        }
      }
    },

    subtitle: {
      marginBottom: 52
    }
  }),
  {
    name: 'VotingChooseButtons'
  }
);
