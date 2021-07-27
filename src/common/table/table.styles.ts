import { createUseStyles } from 'react-jss';

export const useTableStyles = createUseStyles(
  () => ({
    root: {
      display: 'block',
      width: '100%',
      overflowX: 'auto',
      maxWidth: 'calc(100vw - 30px)'
    },

    table: {
      width: '100%',
      borderCollapse: 'collapse',
      textAlign: 'left'
    },

    tableHead: {
      display: 'table-header-group'
    },

    tableBody: {
      display: 'table-row-group'
    },

    tableCell: {
      padding: 16,
      border: 'none',
      verticalAlign: 'top'
    },

    tableRow: {
      verticalAlign: 'middle'
    }
  }),
  {
    name: 'Table'
  }
);
