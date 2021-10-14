import { style } from '@vanilla-extract/css';
import { theme } from '../theme';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: 0,
  margin: 0,
  border: 0,
  backgroundColor: 'transparent',
  outline: 0,
  fontFamily: 'inherit',
  color: 'currentColor',
  textDecoration: 'none',
  transition: 'opacity .3s ease-in-out',

  '@media': {
    [theme.mediaQueries.hover()]: {
      ':hover': {
        opacity: 0.75
      }
    }
  }
});

export const disabled = style({
  pointerEvents: 'none',
  opacity: 0.6
});
