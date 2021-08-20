import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'block',
  width: '100%',
  overflowX: 'auto',
  maxWidth: 'calc(100vw - 30px)'
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left'
});

export const tableHead = style({
  display: 'table-header-group'
});

export const tableBody = style({
  display: 'table-row-group'
});

export const tableCell = style({
  padding: 16,
  border: 'none',
  verticalAlign: 'top',

  selectors: {
    '&:first-child': {
      paddingLeft: 0
    },

    '&:last-child': {
      paddingRight: 0
    }
  }
});

export const tableRow = style({
  verticalAlign: 'middle'
});
