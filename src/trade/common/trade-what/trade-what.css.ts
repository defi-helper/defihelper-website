import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  display: 'flex',
  flexDirection: 'column'
});

export const title = style({
  marginBottom: 92,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 96
    }
  }
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 75,

  '@media': {
    [theme.mediaQueries.md()]: {
      gap: 24
    }
  }
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [theme.mediaQueries.md()]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 40,
      maxWidth: 701,
      alignItems: 'center'
    }
  },

  selectors: {
    '&:nth-child(even)': {
      '@media': {
        [theme.mediaQueries.md()]: {
          marginLeft: 'auto',
          flexDirection: 'row-reverse'
        }
      }
    }
  }
});

export const cardImg = style({
  maxWidth: 100,
  width: '100%',
  margin: '0 auto 31px auto',

  '@media': {
    [theme.mediaQueries.md()]: {
      maxWidth: 250,
      margin: 0
    }
  }
});

export const cardText = style({
  '@media': {
    [theme.mediaQueries.md()]: {
      width: 'calc(100% - 290px)'
    }
  }
});

export const cardTitle = style({
  marginBottom: 8
});

export const cardDescription = style({
  opacity: 0.64,

  selectors: {
    '&:not(:last-child)': {
      marginBottom: 12
    }
  }
});

export const cardInDev = style({
  borderRadius: 8,
  border: `1px solid ${theme.palette.green1}`,
  display: 'inline-block',
  padding: '9px 25px'
});
