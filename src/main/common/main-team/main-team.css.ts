import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const title = style({
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 64
    }
  }
});

export const list = style({
  '@media': {
    [theme.mediaQueries.md()]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(304px, 1fr))',
      gridGap: 32
    }
  }
});

export const card = style({
  padding: '32px 24px',
  minHeight: 432,
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: 32,
      minHeight: 480
    }
  }
});

export const cardName = style({
  marginBottom: 3
});

export const cardRole = style({
  marginBottom: 24
});

export const cardPhoto = style({
  width: 72,
  height: 72,
  objectFit: 'contain',
  marginBottom: 16,
  borderRadius: '50%'
});

export const cardSubtext = style({
  color: theme.palette.grey1,
  marginBottom: 'auto'
});

export const cardAction = style({
  selectors: {
    '&:not(:last-child)': {
      marginRight: 16
    }
  }
});
