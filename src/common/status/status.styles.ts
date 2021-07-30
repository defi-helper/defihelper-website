import { createUseStyles } from 'react-jss';

export const useStatusStyles = createUseStyles(
  () => ({
    root: {
      margin: 0,
      minWidth: 0,
      fontWeight: 400,
      borderRadius: 8,
      padding: '0 8px',
      border: '1px solid currentColor',
      display: 'inline-block'
    },

    grey: {},

    blue: {},

    red: {},

    orange: {},

    beige: {},

    green: {},

    green1: {},

    pink: {},

    purple: {},

    black: {},

    contained: {
      '&$grey': {},

      '&$blue': {},

      '&$red': {},

      '&$orange': {},

      '&$beige': {},

      '&$green': {},

      '&$green1': {},

      '&$pink': {},

      '&$black': {}
    },

    outlined: {}
  }),
  {
    name: 'Status'
  }
);
