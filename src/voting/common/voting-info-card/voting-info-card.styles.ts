import { createUseStyles } from 'react-jss';

type Theme = any;

export const useVotingInfoCardStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      padding: '32px 24px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      [theme.breakpoints.md()]: {
        padding: '64px 64px 48px'
      }
    },

    title: {
      marginBottom: 12,
      width: '100%',

      [theme.breakpoints.md()]: {
        marginBottom: 16
      }
    },

    titleSkeleton: {
      maxWidth: 231,
      width: '100%',
      margin: 'auto',

      [theme.breakpoints.md()]: {
        maxWidth: 382
      }
    },

    progress: {
      width: '100%',
      height: 8,
      borderRadius: 8,
      border: `1px solid ${theme.colors.primary}`,
      marginBottom: 12,

      '&:before': {
        content: '""',
        width: (props: { percent: number }) => `${props.percent}%`,
        display: 'block',
        height: 6,
        background: theme.colors.primary,
        borderRadius: 8
      },

      [theme.breakpoints.md()]: {
        marginBottom: 16
      }
    },

    progressSkeleton: {
      height: 8,
      borderRadius: 8,
      width: '100%',
      marginBottom: 12
    },

    subtitle: {
      marginBottom: 16,
      width: '100%',

      [theme.breakpoints.md()]: {
        marginBottom: 24
      }
    },

    subtitleSkeleton: {
      maxWidth: 233,
      width: '100%',
      margin: 'auto',

      [theme.breakpoints.md()]: {
        maxWidth: 319
      }
    },

    button: {
      marginBottom: 64,

      [theme.breakpoints.md()]: {
        marginBottom: 96
      }
    },

    buttonSkeleton: {
      width: 160,
      height: 48,

      [theme.breakpoints.md()]: {
        width: 240,
        height: 64
      }
    },

    description: {
      width: '100%',
      whiteSpace: 'pre-wrap'
    },

    descriptionSkeleton: {
      height: 16,
      width: '100%',
      marginBottom: 4,
      borderRadius: 4
    }
  }),
  {
    name: 'VotingInfoCard'
  }
);
