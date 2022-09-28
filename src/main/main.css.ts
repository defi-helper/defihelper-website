import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const header = style({
  marginBottom: 80,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 100
    }
  }
});

export const section = style({
  marginBottom: 100,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 204
    }
  }
});

export const indevelopmentHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: 42,
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 64
    }
  }
});

export const indevelopment = style({
  background: theme.palette.green1,
  color: theme.palette.black1,
  borderRadius: 7,
  alignItems: 'center',
  justifyContent: 'center',
  width: 300,
  height: 43,
  display: 'none',

  '@media': {
    [theme.mediaQueries.lg()]: {
      display: 'inline-flex'
    }
  }
});

export const nocode = style({
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 91
    }
  }
});

export const nocodeText = style({
  display: 'grid',
  gridGap: 20,

  '@media': {
    [theme.mediaQueries.lg()]: {
      gridTemplateColumns: '1.2fr 1fr',
      gridGap: 110
    }
  }
});

export const nocodeGreenText = style({
  color: theme.palette.green1
});

export const security = style({
  marginBottom: 32,

  '@media': {
    [theme.mediaQueries.md()]: {
      marginBottom: 80
    }
  }
});
