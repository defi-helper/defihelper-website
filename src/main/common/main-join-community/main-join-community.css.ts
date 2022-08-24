import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  padding: 16,

  '@media': {
    [theme.mediaQueries.md()]: {
      padding: '48px 32px'
    }
  }
});

export const title = style({
  marginBottom: 32,
  textAlign: 'center',

  '@media': {
    [theme.mediaQueries.md()]: {
      marginBottom: 48,
      textAlign: 'left'
    }
  }
});

export const list = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  marginBottom: 32,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridRowGap: 24,
  gridColumnGap: 51,

  '@media': {
    [theme.mediaQueries.lg()]: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 56,
      gap: 35
    }
  }
});

export const listItem = style({});

export const socialLink = style({
  verticalAlign: 'middle',
  display: 'inline-flex',
  alignItems: 'center',
  whiteSpace: 'nowrap'
});

export const socialIcon = style({
  marginRight: 4,
  width: 40,
  height: 40
});

export const grey = style({
  color: theme.palette.grey1
});

export const feedback = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  '@media': {
    [theme.mediaQueries.md()]: {
      alignItems: 'center',
      flexDirection: 'row'
    }
  }
});

export const input = style({
  background: theme.color.paper,
  border: `1px solid ${theme.palette.grey5}`
});

export const feedbackText = style({
  marginRight: 'auto',
  width: '100%',
  textAlign: 'center',

  '@media': {
    [theme.mediaQueries.md()]: {
      width: '46%',
      textAlign: 'left'
    }
  }
});

export const feedbackCol = style({
  width: '100%',

  '@media': {
    [theme.mediaQueries.md()]: {
      width: '27%'
    },

    [theme.mediaQueries.lg()]: {
      width: '18%'
    }
  }
});

export const feedbackButton = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [theme.mediaQueries.md()]: {
      width: '18%'
    },

    [theme.mediaQueries.lg()]: {
      marginTop: 0
    }
  }
});
