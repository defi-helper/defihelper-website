import { composeStyles, style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  overflowX: 'hidden'
});

export const col = style({
  padding: '0 16px'
});

export const hero = style({
  marginBottom: 112,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 156
    }
  }
});

export const title = style({
  marginBottom: 16
});

export const subtitle = style({
  marginBottom: 24,
  color: theme.palette.grey1
});

export const text = composeStyles(
  col,
  style({
    '@media': {
      [theme.mediaQueries.lg()]: {
        width: '63%',
        paddingTop: 64,
        paddingBottom: 80
      }
    }
  })
);

export const image = composeStyles(
  col,
  style({
    width: '37%',
    display: 'none',

    '@media': {
      [theme.mediaQueries.lg()]: {
        display: 'block'
      }
    }
  })
);

export const imageInner = style({
  background: 'rgba(255, 255, 255, 0.24)',
  position: 'relative',
  right: -157,
  borderRadius: 24,
  border: `1px solid ${theme.palette.white}`,
  opacity: 0.16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 709,
  height: '100%'
});

export const factoid = style({
  width: '100%',
  color: theme.palette.grey1,

  '@media': {
    [theme.mediaQueries.lg()]: {
      width: 'auto'
    }
  }
});
