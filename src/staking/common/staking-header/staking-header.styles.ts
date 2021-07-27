import { createUseStyles } from 'react-jss';

export const useStakingHeaderStyles = createUseStyles(
  (theme: any) => {
    return {
      root: {
        backgroundColor: theme.colors.proposalPlate,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '884px',
        backgroundPosition: 'center 40%',
        borderRadius: 24,
        padding: [72, 29],
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',

        [theme.breakpoints.md()]: {
          padding: 48,
          minHeight: 240
        }
      },

      title: {
        marginBottom: 40,
        whiteSpace: 'nowrap',

        [theme.breakpoints.md()]: {
          marginBottom: 24
        },

        '& > *': {
          fontSize: 24,
          lineHeight: '32px',

          [theme.breakpoints.md()]: {
            fontSize: 32,
            lineHeight: '40px'
          }
        }
      },

      content: {
        margin: 'auto',

        [theme.breakpoints.md()]: {
          margin: 0
        }
      },

      info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        [theme.breakpoints.lg()]: {
          justifyContent: 'center',
          flexDirection: 'row',

          '& > *:not(:last-child)': {
            marginRight: 32
          }
        }
      },

      icon: {
        marginBottom: -4,
        width: 27,
        height: 27,

        [theme.breakpoints.md()]: {
          width: 32,
          height: 32
        }
      },

      status: {
        fontSize: 32,
        lineHeight: '40px'
      }
    };
  },
  {
    name: 'StakingHeader'
  }
);
