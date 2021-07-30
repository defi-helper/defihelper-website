import { createUseStyles } from 'react-jss';

export const useTypewriterStyles = createUseStyles(
  {
    carret: {
      '&:after': {
        content: '""',
        position: 'relative',
        display: 'inline-block',
        right: -1,
        height: '1.2em',
        bottom: '-0.3em',
        width: 1,
        animation: '$blink-caret .65s step-end infinite',
        background: 'currentColor'
      }
    },

    '@keyframes blink-caret': {
      'from, to': {
        background: 'transparent'
      },
      '50%': {
        background: 'currentColor'
      }
    }
  },
  {
    name: 'Typewriter'
  }
);
