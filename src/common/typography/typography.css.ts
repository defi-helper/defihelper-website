import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from '../theme';

export const root = style({
  margin: 0,
  fontFamily: 'inherit',
  color: 'currentColor',
  fontWeight: 'normal',
  textDecoration: 'none'
});

export const variants = styleVariants({
  h1: {
    fontSize: 48,
    lineHeight: '56px',

    '@media': {
      [theme.mediaQueries.lg()]: {
        fontSize: 80,
        lineHeight: '88px' as string
      }
    }
  },

  h2: {
    fontSize: 32,
    lineHeight: '40px',

    '@media': {
      [theme.mediaQueries.lg()]: {
        fontSize: 64,
        lineHeight: '72px' as string
      }
    }
  },

  h3: {
    fontSize: 16,
    lineHeight: '24px',

    '@media': {
      [theme.mediaQueries.lg()]: {
        fontSize: 32,
        lineHeight: '40px' as string
      }
    }
  },

  h4: {
    fontSize: 16,
    lineHeight: '24px',

    '@media': {
      [theme.mediaQueries.lg()]: {
        fontSize: 24,
        lineHeight: '32px' as string
      }
    }
  },

  h5: {
    fontSize: 16,
    lineHeight: '20px'
  },

  body1: {
    fontSize: 16,
    lineHeight: '24px',

    '@media': {
      [theme.mediaQueries.lg()]: {
        fontSize: 20,
        lineHeight: '28px' as string
      }
    }
  },

  body2: {
    fontSize: 14,
    lineHeight: '20px',

    '@media': {
      [theme.mediaQueries.lg()]: {
        fontSize: 16,
        lineHeight: '24px' as string
      }
    }
  },

  inherit: {
    fontWeight: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit'
  }
});

export const aligns = styleVariants({
  left: {
    textAlign: 'left'
  },

  center: {
    textAlign: 'center'
  },

  right: {
    textAlign: 'right'
  }
});

export const fontFamilies = styleVariants({
  square: {
    fontFamily: theme.fonts.square
  },

  circle: {
    fontFamily: theme.fonts.circle
  },

  mono: {
    fontFamily: theme.fonts.mono
  }
});

export const transforms = styleVariants({
  uppercase: {
    textTransform: 'uppercase'
  },

  normal: {
    textTransform: 'none'
  },

  lowercase: {
    textTransform: 'lowercase'
  }
});

export const weights = styleVariants({
  light: {
    fontWeight: 300
  },

  normal: {
    fontWeight: 400
  },

  bold: {
    fontWeight: 700
  },

  semibold: {
    fontWeight: 600
  }
});
