import { style, globalStyle } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  marginBottom: 58
});

export const grid = style({
  display: 'grid',
  gridRowGap: 30,
  marginBottom: 60,

  '@media': {
    [theme.mediaQueries.md()]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridColumnGap: 30,
      gridRowGap: 77,
      marginBottom: 118
    }
  }
});

export const fullWidth = style({
  '@media': {
    [theme.mediaQueries.md()]: {
      gridColumnStart: 1,
      gridColumnEnd: 5
    }
  }
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '29px 0 22px'
});

export const basic = style({
  background: theme.palette.green1,
  color: theme.palette.black1,
  padding: '24px 0 33px'
});

export const fs40 = style({
  '@media': {
    [theme.mediaQueries.md()]: {
      fontSize: '40px',
      lineHeight: '49px'
    }
  }
});

export const basicSubtitle = style({
  '@media': {
    [theme.mediaQueries.md()]: {
      fontSize: 28,
      lineHeight: '34px'
    }
  }
});

export const invidual = style({
  padding: '30px 0 32px'
});

export const lists = style({
  display: 'grid',
  maxWidth: 1070,
  margin: '0 auto',
  gap: 16,

  '@media': {
    [theme.mediaQueries.md()]: {
      gridTemplateColumns: '1fr 1fr',
      gridGap: 60
    }
  }
});

export const list = style({
  padding: 0,
  margin: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: 16
});

export const listItem = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 26
});

export const hexagonHidden = style({
  minWidth: 13
});

export const hexagon = style({
  position: 'absolute',
  minWidth: 13,
  height: 7.51,
  backgroundColor: theme.palette.green1,
  margin: '3.75px 0',
  display: 'inline-block',
  top: 10,
  left: 0
});

globalStyle(`${hexagon}:before,${hexagon}:after`, {
  content: '""',
  position: 'absolute',
  width: 0,
  borderLeft: '6.5px solid transparent',
  borderRight: '6.5px solid transparent'
});

globalStyle(`${hexagon}:before`, {
  bottom: '100%',
  borderBottom: `3.75px solid ${theme.palette.green1}`
});

globalStyle(`${hexagon}:after`, {
  top: '100%',
  width: 0,
  borderTop: `3.75px solid ${theme.palette.green1}`
});
