import { createUseStyles } from 'react-jss';

export const useVotingProposalDescriptionStyles = createUseStyles(
  {
    description: {
      maxWidth: 560,
      margin: '0 auto 60px'
    },

    skeletonWrap: {
      '&:not(:last-child)': {
        marginBottom: 32
      },

      '& *': {
        marginBottom: 8
      }
    }
  },
  {
    name: 'VotingDetailsBlock'
  }
);
// theme.colors.blue2
