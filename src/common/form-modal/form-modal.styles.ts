import { createUseStyles } from 'react-jss';

export const useFormModalStyles = createUseStyles(
  () => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },

    inputs: {
      margin: ['auto', 0]
    },

    row: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',

      '&:not(:last-child)': {
        marginBottom: 56
      }
    },

    reward: {
      position: 'absolute',
      top: '100%',
      left: 0,
      padding: '4px 9px',
      borderRadius: 12
    },

    input: {
      display: 'flex',
      flexDirection: 'column',

      '&:first-child': {
        width: '65%',
        alignItems: 'flex-start'
      },

      '&:last-child': {
        width: '35%',
        alignItems: 'flex-end'
      }
    },

    inputSizes: {
      fontSize: 32,
      lineHeight: '40px'
    },

    balanceButton: {},

    selectButton: {
      padding: [4, 8],
      margin: [-4, -8],
      borderRadius: 8
    },

    select: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },

    selectOption: {
      fontSize: 24,
      lineHeight: '32px',
      justifyContent: 'flex-start',
      padding: [8, 16],
      margin: [0, -16],
      borderRadius: 8
    },

    selectOptionActive: {
      opacity: 0.4,
      pointerEvents: 'none'
    },

    hint: {
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    hintButton: {
      marginLeft: 5
    },

    tippy: {
      padding: 16,
      borderRadius: 16,
      transition: 'none'
    },

    currency: {
      lineHeight: '38px',
      display: 'block',
      height: 32,
      marginLeft: 6
    },

    selectBalance: {
      marginLeft: 'auto'
    },

    tokenWrap: {
      display: 'flex'
    },

    labelWithBalance: {
      whiteSpace: 'nowrap'
    },

    emptyBalance: {
      paddingTop: 24
    }
  }),
  {
    name: 'FormModal'
  }
);
