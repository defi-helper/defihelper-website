import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  minHeight: 'calc(100vh - 84px)',

  '@media': {
    [theme.mediaQueries.md()]: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 'calc(100vh - 116px)'
    }
  }
});

export const img = style({
  maxWidth: 450,
  width: '100%',
  margin: '0 auto'
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

export const watchPromo = style({
  color: theme.palette.blue,
  fontSize: 20,
  lineHeight: '28px',
  textTransform: 'uppercase',
  fontFamily: theme.fonts.mono,
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  padding: '12px 14px'
});