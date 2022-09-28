import { style, keyframes } from '@vanilla-extract/css';

export const root = style({
  borderRadius: 13,
  width: 11,
  height: 20,
  border: `1px solid currentColor`,
  position: 'relative'
});

const translate = keyframes({
  '0%': { transform: 'translateY(0)' },
  '25%': { transform: 'translateY(-3px)' },
  '50%': { transform: 'translateY(0)' },
  '75%': { transform: 'translateY(3px)' },
  '100%': { transform: 'translateY(0)' }
});

export const circleOuter = style({
  width: 3,
  height: 6,
  borderRadius: 5,
  position: 'absolute',
  left: 0,
  right: 0,
  margin: 'auto',
  top: 3,
  overflow: 'hidden'
});

export const circleInner = style({
  height: '100%',
  width: '100%',
  animation: `${translate} 2.75s ease-in-out infinite`,
  background: 'currentColor',
  borderRadius: 'inherit'
});
