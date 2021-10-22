import { style, createVar } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  maxWidth: 960,
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 64
    }
  }
});

const width = createVar();

export const grid = style({
  display: 'grid',
  padding: 0,
  listStyle: 'none',
  gridTemplateColumns: `repeat(auto-fit, minmax(${width}, 1fr))`,
  gridGap: 40,
  margin: '0 0 16px',

  '@media': {
    [theme.mediaQueries.md()]: {
      vars: {
        [width]: '350px'
      }
    },

    [theme.mediaQueries.lg()]: {
      gridGap: 152,
      gridRowGap: 79,
      margin: '0 0 32px',

      vars: {
        [width]: '325px'
      }
    }
  },

  vars: {
    [width]: '270px'
  }
});

export const card = style({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
});

export const cardImage = style({
  marginBottom: 16,
  opacity: 0.64,
  maxWidth: 46,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 24,
      maxWidth: 'none'
    }
  }
});

export const cardTitle = style({
  marginBottom: 8,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 16
    }
  }
});

export const cardDescription = style({
  color: theme.palette.grey1,
  marginBottom: 'auto'
});

export const request = style({
  marginTop: 16
});

export const comingSoon = style({
  color: theme.palette.green1
});

export const scenarios = style({
  marginTop: 'auto'
});
