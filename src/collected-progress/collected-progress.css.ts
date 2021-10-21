import { style } from '@vanilla-extract/css';
import { theme } from 'src/common/theme';

export const root = style({
  width: '100%',
  color: theme.palette.blue
});

export const progress = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: 'inherit',
  height: 'inherit'
});

export const item = style({
  height: 'inherit',
  border: `1px solid currentColor`,
  margin: '0 3px',
  width: '100%',

  selectors: {
    '&:first-child': {
      marginLeft: 0
    },

    '&:last-child': {
      marginRight: 0
    }
  }
});

export const filledItem = style({
  backgroundColor: 'currentColor'
});

export const topTitle = style({
  marginBottom: 10,
  display: 'flex'
});

export const link = style({
  marginLeft: 'auto',
  color: theme.palette.white
});

export const bottomTitle = style({
  margin: '16px 0'
});

export const description = style({
  marginTop: 10,
  color: theme.palette.grey1
});
