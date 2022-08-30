import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  display: 'flex',
  flexDirection: 'column'
});

export const title = style({
  marginBottom: 24,
  maxWidth: 960
});

export const actions = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: 24
});

export const tabs = style({
  display: 'flex',
  padding: 2,
  flexDirection: 'column',
  width: '100%',

  '@media': {
    [theme.mediaQueries.sm()]: {
      flexDirection: 'row',
      width: 'auto'
    }
  }
});

export const tab = style({
  padding: '6px 16px',
  borderRadius: 6,
  color: theme.palette.grey7
});

export const tabActive = style({
  background: theme.palette.green,
  color: theme.palette.white
});

export const table = style({
  marginBottom: 24,

  '@media': {
    [theme.mediaQueries.md()]: {
      background: theme.color.paper,
      borderRadius: 8,
      marginBottom: 32
    }
  }
});

export const row = style({
  '@media': {
    [theme.mediaQueries.md()]: {
      display: 'grid',
      gridTemplateColumns: '14% 14% 11% 10% 13% 13% 10% 10%',
      padding: '16px 25px',
      gap: 10
    }
  }
});

export const tableHead = style([
  row,
  {
    display: 'none',
    color: theme.palette.grey7,
    borderBottom: `1px solid ${theme.palette.grey8}`,

    '@media': {
      [theme.mediaQueries.md()]: {
        display: 'grid'
      }
    }
  }
]);

export const tableBody = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  '@media': {
    [theme.mediaQueries.md()]: {
      display: 'block'
    }
  }
});

export const tableRow = style([
  row,
  {
    background: theme.color.paper,
    padding: '10px 13px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    borderRadius: 8,
    gap: 16,

    '@media': {
      [theme.mediaQueries.md()]: {
        background: 'none',
        padding: '16px 25px',
        display: 'grid',
        alignItems: 'center',
        borderRadius: 0,
        gap: 10
      }
    },

    selectors: {
      '&:not(:last-child)': {
        '@media': {
          [theme.mediaQueries.md()]: {
            borderBottom: `1px solid ${theme.palette.grey8}`
          }
        }
      }
    }
  }
]);

export const contractName = style({
  display: 'flex',
  gap: 8,
  marginBottom: 15,
  alignItems: 'center',

  '@media': {
    [theme.mediaQueries.md()]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginBottom: 0
    }
  }
});

export const contractArrow = style({
  marginLeft: 'auto'
});

export const contractNameInactive = style({
  margin: 0
});

export const contractIcons = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  order: -1,

  '@media': {
    [theme.mediaQueries.md()]: {
      order: 'unset'
    }
  }
});

export const contractIconsItem = style({
  width: 20,
  height: 20,

  selectors: {
    '&:not(:first-child)': {
      marginLeft: -4
    }
  }
});

export const contractIconsItemTokens = style({
  display: 'flex',
  alignItems: 'center'
});

export const contractUnknownNetworkIcon = style([
  contractIconsItem,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.color.background
  }
]);

export const protocol = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8
});

export const protocolIcon = style({
  width: 24,
  height: 24
});

export const tableButton = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 14,

  '@media': {
    [theme.mediaQueries.md()]: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginTop: 0
    }
  }
});

export const tableCol = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  '@media': {
    [theme.mediaQueries.md()]: {
      display: 'block'
    }
  }
});

globalStyle(`${tableCol} span:first-child`, {
  color: theme.palette.grey7,

  '@media': {
    [theme.mediaQueries.md()]: {
      color: 'inherit'
    }
  }
});

export const button = style({
  margin: '0 auto'
});

export const loading = style({
  padding: '16px 25px',
  background: theme.color.paper,
  borderRadius: 8
});

export const apy = style({
  display: 'inline-flex',
  gap: 4,
  alignItems: 'center'
});

export const tokenIconArrow = style({
  margin: '0 6px'
});

export const colButton = style({
  cursor: 'pointer'
});

export const green = style({
  color: `${theme.palette.green1} !important`
});

export const red = style({
  color: `${theme.palette.red} !important`
});

export const riskLevel = style({
  minWidth: 206,
  display: 'flex',
  flexDirection: 'column',
  gap: 16
});

export const riskLevelRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 10
});

export const riskLevelSpacing = style({
  background: theme.palette.grey8,
  height: 1,
  width: '100%'
});

export const riskLevelStatus = style({
  background: theme.palette.green,
  padding: '0 31px',
  borderRadius: 22,
  color: theme.palette.black1
});
