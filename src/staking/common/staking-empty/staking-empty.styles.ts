import { createUseStyles } from 'react-jss';

export const useStakingEmptyStyles = createUseStyles(
  (theme: any) => ({
    root: {
      opacity: 0.4,
      border: `1px solid ${theme.colors.primary}`,
      boxSizing: 'border-box',
      borderRadius: 16,
      height: 62
    }
  }),
  {
    name: 'StakingEmpty'
  }
);
