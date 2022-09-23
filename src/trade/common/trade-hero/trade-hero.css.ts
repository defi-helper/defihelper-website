import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,

  '@media': {
    [theme.mediaQueries.sm()]: {
      minHeight: 'calc(100vh - 84px)'
    },

    [theme.mediaQueries.md()]: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 'calc(100vh - 116px)'
    }
  }
});

export const scrollIcon = style({
  position: 'absolute',
  bottom: '5%',
  left: 0,
  right: 0,
  margin: 'auto',
  display: 'none',

  '@media': {
    [theme.mediaQueries.md()]: {
      display: 'block'
    }
  }
});

export const img = style({
  maxWidth: 450,
  width: '100%',
  margin: '0 auto',

  '@media': {
    [theme.mediaQueries.lg()]: {
      maxWidth: 769,
      marginLeft: 'auto'
    }
  }
});

export const text = style({
  display: 'flex',
  flexDirection: 'column'
});

export const title = style({
  marginBottom: 8,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 24
    }
  }
});

export const description = style({
  opacity: 0.64,
  marginBottom: 31,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 56
    }
  }
});

export const actions = style({
  margin: 'auto',

  '@media': {
    [theme.mediaQueries.lg()]: {
      margin: 0
    }
  }
});
