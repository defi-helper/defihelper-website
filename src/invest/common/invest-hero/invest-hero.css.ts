import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  minHeight: 'calc(85vh - 84px)',

  '@media': {
    [theme.mediaQueries.md()]: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 'calc(85vh - 116px)'
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

export const video = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

export const videoInner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 17,
  border: `1px solid ${theme.palette.green1}`,
  borderRadius: 30,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: 310,
  height: 230,
  cursor: 'pointer',

  '@media': {
    [theme.mediaQueries.sm()]: {
      width: 457,
      height: 330
    }
  }
});

export const videoBg = style({
  position: 'absolute',
  maxWidth: 744,
  objectFit: 'contain',
  zIndex: 1,
  right: '-23%',
  top: '-29%',
  display: 'none',
  pointerEvents: 'none',

  '@media': {
    [theme.mediaQueries.md()]: {
      display: 'block'
    }
  }
});

export const text = style({
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [theme.mediaQueries.md()]: {
      maxWidth: 770
    }
  }
});

export const title = style({
  marginBottom: 44
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
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  '@media': {
    [theme.mediaQueries.md()]: {
      flexDirection: 'row',
      margin: 0
    }
  }
});
