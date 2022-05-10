import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 64
    }
  }
});

export const grid = style({
  display: 'grid',
  gridGap: 32,

  '@media': {
    [theme.mediaQueries.lg()]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(249px, 1fr))'
    }
  }
});

export const opacity = style({
  opacity: 0.64
});

export const card = style({
  minHeight: 360,
  display: 'flex',
  flexDirection: 'column',
  padding: '32px 20px',
  position: 'relative',

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '64px 40px',
      minHeight: 560
    }
  }
});

export const cardTitle = style({
  marginBottom: 16
});

export const cardDescription = style({
  marginBottom: 'auto'
});

export const estimateTitle = style({
  color: theme.palette.pink,
  marginBottom: 8
});

export const estimateSubtitle = style({
  color: theme.palette.softpink
});

export const completedWrap = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
});

export const completed = style({
  width: 348,
  height: 103,
  background: theme.palette.green1,
  color: theme.palette.black1,
  fontSize: 40,
  lineHeight: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 20,
  transform: 'rotate(-24.5deg)'
});
