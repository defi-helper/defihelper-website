import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  marginBottom: 36
});

export const grid = style({
  display: 'grid',
  gap: 16,

  '@media': {
    [theme.mediaQueries.lg()]: {
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }
});

export const audits = style({
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  alignItems: 'center',

  '@media': {
    [theme.mediaQueries.lg()]: {
      gridTemplateColumns: '1fr 1fr',
      display: 'grid',
      padding: '28px 29px 51px'
    }
  }
});

export const auditsTitle = style({
  '@media': {
    [theme.mediaQueries.lg()]: {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      marginBottom: 58
    }
  }
});

export const auditsButton = style({
  flexDirection: 'column',
  display: 'flex',

  '@media': {
    [theme.mediaQueries.lg()]: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }
});

export const auditsButtonInner = style({
  background: theme.palette.grey3,
  color: 'inherit',
  border: 'none'
});

export const yourMoney = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 21,
  padding: 16,

  '@media': {
    [theme.mediaQueries.lg()]: {
      gap: 16,
      padding: '28px 36px 15px'
    }
  }
});

export const yourMoneyTitle = style({
  maxWidth: 246
});

export const yourMoneyText = style({
  opacity: 0.64
});
