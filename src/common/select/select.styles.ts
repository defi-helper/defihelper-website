import { createUseStyles } from 'react-jss';

export const useSelectStyles = createUseStyles(
  () => ({
    wrap: {
      marginTop: 17,
      fontSize: 20,
      lineHeight: '24px',
      position: 'relative',
      height: 24,
      textOverflow: 'ellipsis'
    },

    select: {
      position: 'relative',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      alignItems: 'center',
      height: 'inherit',
      width: '100%',
      letterSpacing: '-0.02em',
      outline: 'none',
      cursor: 'pointer'
    },

    disabled: {
      pointerEvents: 'none',
      opacity: 0.6
    },

    readOnly: {
      pointerEvents: 'none'
    },

    dropdown: {
      position: 'absolute',
      width: '100%',
      left: 0,
      zIndex: 10,
      top: '100%',
      overflowY: 'scroll',
      maxHeight: 300,
      display: 'none'
    },

    dropdownOpen: {
      display: 'block'
    },

    label: {
      position: 'absolute',
      letterSpacing: '-0.02em',
      width: '100%',
      pointerEvents: 'none',
      height: 'inherit',
      transition: 'transform 300ms ease',
      transform: 'translateY(-17px) scale(0.55)',
      transformOrigin: 'top left',
      fontSize: 20,
      lineHeight: '24px',
      zIndex: 2,
      paddingRight: 8
    },

    option: {
      width: '100%',
      justifyContent: 'flex-start'
    },

    open: {
      transform: 'rotate(180deg) translateY(5px)'
    }
  }),
  {
    name: 'Select'
  }
);
