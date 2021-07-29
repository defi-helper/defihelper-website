import { style, createVar } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  marginBottom: 64
});

const width = createVar();

export const grid = style({
  display: 'grid',
  padding: 0,
  listStyle: 'none',
  gridTemplateColumns: `repeat(auto-fit, minmax(${width}, 1fr))`,
  gridGap: 16,
  margin: '0 0 16px',

  '@media': {
    [theme.mediaQueries.md()]: {
      vars: {
        [width]: '350px'
      }
    },

    [theme.mediaQueries.lg()]: {
      gridGap: 32,
      margin: '0 0 32px',

      vars: {
        [width]: '416px'
      }
    }
  },

  vars: {
    [width]: '270px'
  }
});

export const card = style({
  padding: '32px 24px',
  minHeight: '100%',

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '80px 40px'
    }
  }
});

export const cardImage = style({
  opacity: 0.16,
  border: `1px solid ${theme.palette.white}`,
  borderRadius: 8,
  width: 112,
  height: 80,
  marginBottom: 16,

  '@media': {
    [theme.mediaQueries.lg()]: {
      width: 168,
      height: 120,
      marginBottom: 24
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
  color: theme.palette.grey1
});

export const scenario = style({
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

export const script = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px 24px 48px'
});

export const scriptItem = style({
  padding: '4px 12px',
  fontSize: 20,
  lineHeight: '28px',
  display: 'inline-block',
  fontFamily: theme.fonts.mono,
  color: theme.palette.black1,
  borderRadius: 8,

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '24px 32px',
      fontSize: 24,
      lineHeight: '32px',
      borderRadius: 16
    }
  },

  selectors: {
    '&:not(:last-child)': {
      marginRight: 4
    }
  }
});

export const green = style({
  background: theme.palette.green
});

export const grey = style({
  background: theme.palette.grey2
});

export const brown = style({
  background: theme.palette.brown
});

export const orange = style({
  background: theme.palette.orange
});

export const scriptButton = style({
  border: `2px solid ${theme.palette.white}`,
  opacity: 0.24,
  color: theme.palette.white
});

export const scriptRow = style({
  width: '100%',

  '@media': {
    [theme.mediaQueries.lg()]: {
      maxWidth: 457
    }
  },

  selectors: {
    '&:not(:last-child)': {
      marginBottom: 4,

      '@media': {
        [theme.mediaQueries.lg()]: {
          marginBottom: 16
        }
      }
    }
  }
});
