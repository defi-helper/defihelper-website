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
  margin: 0,
  padding: 0,
  listStyle: 'none'
});

export const listItem = style({
  display: 'inline-block',
  marginBottom: 16,
  verticalAlign: 'middle',

  selectors: {
    '&:not(:last-child)': {
      marginRight: 16
    }
  }
});

export const protocol = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 16,
  padding: 16
});

export const protocolButton = style({
  fontSize: 16,
  lineHeight: '24px',

  '@media': {
    [theme.mediaQueries.lg()]: {
      fontSize: 24,
      lineHeight: '32px'
    }
  }
});

export const protocolIcon = style({
  marginRight: 8,
  width: 40,
  height: 40
});
