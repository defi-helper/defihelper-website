import { style, globalStyle } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const chart = style({
  padding: '16px 20px',

  '@media': {
    [theme.mediaQueries.md()]: {
      padding: '32px 40px'
    },

    [theme.mediaQueries.lg()]: {
      padding: '64px 80px'
    }
  }
});

export const title = style({
  marginBottom: 64,
  maxWidth: 960
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 43,
  flexDirection: 'column',

  '@media': {
    [theme.mediaQueries.md()]: {
      marginBottom: 96,
      flexDirection: 'row'
    }
  }
});

globalStyle(`${header} > *`, {
  marginBottom: 10,

  '@media': {
    [theme.mediaQueries.md()]: {
      marginBottom: 0
    }
  }
});

export const slider = style({
  width: 169
});

export const grid = style({
  display: 'grid',
  gridGap: 30,

  '@media': {
    [theme.mediaQueries.lg()]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 156
    }
  }
});

export const howItWorks = style({
  color: theme.palette.white
});
