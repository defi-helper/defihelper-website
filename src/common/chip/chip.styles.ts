import { createUseStyles } from 'react-jss';

export const useChipStyles = createUseStyles(
  () => ({
    chip: {
      margin: 0,
      minWidth: 0,
      fontWeight: 500,
      borderRadius: 12,
      padding: '8px 12px'
    }
  }),
  {
    name: 'Chip'
  }
);
