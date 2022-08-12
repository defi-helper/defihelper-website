import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  display: 'grid',
  gridRowGap: 13,

  '@media': {
    [theme.mediaQueries.lg()]: {
      gridTemplateColumns: '1fr 520px',
      gridColumnGap: 13,
      gridRowGap: 45
    }
  }
});

export const title = style({
  color: theme.palette.green1,
  marginBottom: 13
});

export const paperWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16
});

export const paper = style({
  padding: '19px 33px 24px 34px',
  display: 'flex',
  gap: 33,
  alignItems: 'center',
  width: '100%'
});

export const paperText = style({
  width: 'calc(100% - 51px)'
});

export const investmentRecommendation = style({
  display: 'flex',
  gap: 33,
  padding: '19px 33px 24px 34px',

  '@media': {
    [theme.mediaQueries.lg()]: {
      background: 'transparent',
      border: `1px solid ${theme.palette.green1}`,
      padding: '31px 39px 43px 61px',
      gridColumnStart: 2,
      gridRowStart: 1,
      gridRowEnd: 3,
      gap: 20
    }
  }
});

export const investmentRecommendationText = style([
  paperText,
  style({
    '@media': {
      [theme.mediaQueries.lg()]: {
        width: 'calc(100% - 77px)'
      }
    }
  })
]);

export const investmentRecommendationIcon = style({
  width: 51,
  height: 43,

  '@media': {
    [theme.mediaQueries.lg()]: {
      width: 77,
      height: 43
    }
  }
});

export const investmentRecommendationTitle = style([
  title,
  style({
    '@media': {
      [theme.mediaQueries.lg()]: {
        marginBottom: 29
      }
    }
  })
]);

export const investmentRecommendationDescription = style({
  '@media': {
    [theme.mediaQueries.lg()]: {
      display: 'none'
    }
  }
});

export const investmentRecommendationPercent = style({
  display: 'none',
  alignItems: 'center',
  gap: 10,
  padding: '8px 16px 16px 22px',

  selectors: {
    '&:nth-child(3)': {
      marginRight: 23
    },

    '&:last-child': {
      marginTop: 22
    }
  },

  '@media': {
    [theme.mediaQueries.lg()]: {
      display: 'inline-flex'
    }
  }
});

export const investmentRecommendationPercentIcon = style({
  width: 28,
  height: 28
});

export const arrow = style({
  display: 'none',

  '@media': {
    [theme.mediaQueries.lg()]: {
      display: 'block'
    }
  }
});

export const green = style({
  color: theme.palette.green1
});
