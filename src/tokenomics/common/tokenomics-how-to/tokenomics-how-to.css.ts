import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 64
    }
  }
});

export const grid = style({
  display: 'grid',
  gridGap: 16,

  '@media': {
    [theme.mediaQueries.lg()]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(416px, 1fr))`,
      gridGap: 32
    }
  }
});

export const card = style({
  padding: '44px 20px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: 232,

  '@media': {
    [theme.mediaQueries.lg()]: {
      minHeight: 480,
      padding: '64px 40px',

      selectors: {
        '&:last-child': {
          gridColumnEnd: 4,
          gridColumnStart: 2
        }
      }
    }
  }
});

export const cardTitle = style({
  marginBottom: 16
});

export const green = style({
  color: theme.palette.green
});

export const cardSubtitle = style({
  marginBottom: 24
});

export const cardDescription = style({
  display: 'grid',
  gridGap: 30,
  height: '100%',

  '@media': {
    [theme.mediaQueries.md()]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
      gridGap: 72
    }
  }
});

export const cardDescriptionItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
});

export const cardDescriptionItemTitle = style({
  color: theme.palette.grey1
});

export const cardDescriptionItemActions = style({
  marginTop: 'auto'
});

export const cardDescriptionItemActionsItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginRight: 16,
      marginBottom: 16
    }
  }
});

export const protocol = style({
  paddingLeft: 12
});

export const protocolLogo = style({
  marginRight: 8
});
