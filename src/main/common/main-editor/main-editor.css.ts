import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const list = style({
  '@media': {
    [theme.mediaQueries.lg()]: {
      display: 'grid',
      gridTemplateColumns: '1fr 2px 1fr'
    }
  }
});

export const separator = style({
  backgroundColor: theme.palette.black4,
  width: '100%',
  height: 2,

  '@media': {
    [theme.mediaQueries.lg()]: {
      height: '100%',
      width: 2
    }
  }
});

export const card = style({
  padding: '40px 24px',
  minHeight: 180,

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '92px 80px'
    }
  }
});

export const cardTitle = style({
  marginBottom: 8
});

export const cardDescription = style({
  marginBottom: 24,
  color: theme.palette.grey1
});

export const code = style({
  position: 'relative',
  paddingLeft: 30
});

export const numbers = style({
  position: 'absolute',
  left: 0,
  top: 0,
  color: theme.palette.grey1
});

export const green = style({
  color: theme.palette.green
});

export const blue = style({
  color: theme.palette.blue
});

export const red = style({
  color: theme.palette.red
});

export const brown = style({
  color: theme.palette.brown
});
