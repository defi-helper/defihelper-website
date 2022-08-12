import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  display: 'flex',
  flexDirection: 'column'
});

export const title = style({
  marginBottom: 24,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 64
    }
  }
});

export const steps = style({
  marginBottom: 24,

  '@media': {
    [theme.mediaQueries.lg()]: {
      display: 'grid',
      gap: 24,
      gridTemplateColumns: '1fr 1fr 1fr',
      marginBottom: 32
    }
  }
});

export const stepsItem = style({
  padding: '28px 28px 38px',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  alignItems: 'center',
  minHeight: 350,

  '@media': {
    [theme.mediaQueries.md()]: {
      alignItems: 'flex-start'
    }
  }
});

export const stepsItemTitle = style({});

export const stepsItemImg = style({
  margin: 'auto',
  width: '100%'
});

export const stepsItemImg1 = style([
  stepsItemImg,
  {
    maxWidth: 172
  }
]);

export const stepsItemImg2 = style([
  stepsItemImg,
  {
    maxWidth: 175
  }
]);

export const stepsItemImg3 = style([
  stepsItemImg,
  {
    maxWidth: 153
  }
]);

export const stepsItemText = style({});

export const stepsItemBr = style({
  display: 'none',

  '@media': {
    [theme.mediaQueries.lg()]: {
      display: 'block'
    }
  }
});

export const connectWallet = style({
  margin: '0 auto'
});
