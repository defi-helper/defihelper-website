import { style } from '@vanilla-extract/css';

export const root = style({
  maxWidth: 400,
  width: '100%',
  padding: 25,
  height: 460,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

export const protocol = style({
  paddingLeft: 12,

  selectors: {
    '&:not(:last-child)': {
      marginBottom: 10
    }
  }
});

export const protocolLogo = style({
  marginRight: 8
});
