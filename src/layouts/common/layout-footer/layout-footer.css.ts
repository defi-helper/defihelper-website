import { style, composeStyles } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  padding: '40px 0',

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '40px 0 114px 0'
    }
  }
});

export const logo = style({
  order: 5,
  marginTop: 56,

  '@media': {
    [theme.mediaQueries.lg()]: {
      order: 'unset',
      marginTop: 0
    }
  }
});

export const mb56mobile = style({
  marginBottom: 56,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 0
    }
  }
});

export const padding = style({
  padding: '0 16px'
});

export const col = composeStyles(
  padding,
  style({
    width: '50%',

    '@media': {
      [theme.mediaQueries.lg()]: {
        width: '20%'
      }
    }
  })
);

export const feedback = style({
  marginTop: 50,
  marginBottom: 50
});

export const input = style({
  background: theme.color.paper
});

export const feedbackText = composeStyles(
  padding,
  style({
    marginRight: 'auto',
    width: '100%',
    marginBottom: 10,

    '@media': {
      [theme.mediaQueries.sm()]: {
        width: '30%',
        marginBottom: 0
      },

      [theme.mediaQueries.md()]: {
        width: '46%'
      }
    }
  })
);

export const feedbackCol = composeStyles(
  padding,
  style({
    width: '100%',
    marginBottom: 10,

    '@media': {
      [theme.mediaQueries.sm()]: {
        width: '35%',
        marginBottom: 0
      },

      [theme.mediaQueries.md()]: {
        width: '27%'
      },

      [theme.mediaQueries.lg()]: {
        width: '18%'
      }
    }
  })
);

export const feedbackButton = composeStyles(
  padding,
  style({
    width: '100%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',

    '@media': {
      [theme.mediaQueries.md()]: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
      },

      [theme.mediaQueries.lg()]: {
        flexDirection: 'column',
        width: '18%',
        marginTop: 0
      }
    }
  })
);

export const separator = style({
  margin: '50px auto',
  background: theme.color.paper,
  height: 1
});

export const mb = style({
  marginBottom: 12,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 16
    }
  }
});

export const list = style({
  listStyle: 'none',
  padding: 0,
  margin: 0
});

export const listItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginBottom: 8
    }
  }
});

export const socialLink = style({
  verticalAlign: 'middle',
  display: 'inline-flex',
  alignItems: 'center'
});

export const socialIcon = style({
  marginRight: 4
});

export const grey = style({
  color: theme.palette.grey1
});
