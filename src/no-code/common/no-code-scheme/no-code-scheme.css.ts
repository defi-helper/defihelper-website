import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  display: 'grid',

  '@media': {
    [theme.mediaQueries.md()]: {
      gridTemplateColumns: '1.7fr 80px 1fr',
      gap: 30
    }
  }
});

export const fs28 = style({
  '@media': {
    [theme.mediaQueries.lg()]: {
      fontSize: 28,
      lineHeight: '34px'
    }
  }
});

export const green = style({
  background: theme.palette.green1,
  color: theme.palette.black1
});

export const choose = style({
  display: 'grid',
  gridColumnGap: 30,
  gridRowGap: 31,

  '@media': {
    [theme.mediaQueries.sm()]: {
      gridTemplateColumns: '1.2fr 1fr'
    }
  }
});

export const fullWidth = style({
  '@media': {
    [theme.mediaQueries.sm()]: {
      gridColumnStart: 1,
      gridColumnEnd: 3
    }
  }
});

export const chooseConditon = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '34px 30px 38px'
});

export const chooseCard = style({
  padding: '17px 34px 15px'
});

export const chooseGasPrice = style({
  padding: '18px 34px 23px'
});

export const arrow = style({
  margin: '60px auto',
  transform: 'rotate(90deg)',

  '@media': {
    [theme.mediaQueries.md()]: {
      transform: 'none',
      margin: 'auto'
    }
  }
});

export const take = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 31
});

export const takeCard = style({
  padding: 34
});
