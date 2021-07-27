import { createUseStyles } from 'react-jss';
import { transitions } from 'polished';

export const useLayoutLogoStyles = createUseStyles(
  (theme: any) => ({
    logo: {
      textDecoration: 'none',
      display: 'inline-flex',
      width: 40,
      height: 40,
      ...transitions('opacity 0.3s ease'),

      [theme.mixins.hover()]: {
        '&:hover': {
          opacity: 0.7
        }
      },

      [theme.breakpoints.lg()]: {
        height: 48,
        width: 48
      }
    },

    img: {
      maxWidth: '100%',
      objectFit: 'contain'
    }
  }),
  {
    name: 'LayoutLogo'
  }
);
