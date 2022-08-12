import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  maxWidth: 749,
  marginBottom: 28
});

export const earnMore1 = style({
  display: 'grid',
  marginBottom: 100,

  '@media': {
    [theme.mediaQueries.lg()]: {
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      marginBottom: 200
    }
  }
});

export const earnMore1Text = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  maxWidth: 415
});

export const earnMore1TextTitle = style({
  marginBottom: 16
});

export const earnMore1TextDescription = style({
  marginBottom: 32,
  opacity: 0.64
});

export const earnMore1Img = style({
  maxWidth: 450,
  width: '100%',
  order: -1,
  margin: '0 auto',
  marginBottom: 29,

  '@media': {
    [theme.mediaQueries.lg()]: {
      margin: 'unset',
      marginLeft: 'auto',
      order: 'unset'
    }
  }
});

export const earnMore2 = style({
  display: 'grid',

  '@media': {
    [theme.mediaQueries.lg()]: {
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center'
    }
  }
});

export const earnMore2Text = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  maxWidth: 451,
  marginLeft: 'auto'
});

export const earnMore2TextTitle = style({
  marginBottom: 16
});

export const earnMore2TextDescription = style({
  marginBottom: 32,
  opacity: 0.64
});

export const earnMore2Img = style({
  maxWidth: 755,
  width: '100%',
  order: -1,
  margin: '0 auto',
  marginBottom: 29,

  '@media': {
    [theme.mediaQueries.lg()]: {
      margin: 'unset',
      order: 'unset'
    }
  }
});
