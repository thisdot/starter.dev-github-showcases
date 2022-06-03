import spacing from '@lib/css/spacing';
import { sprinkles } from '@lib/css/sprinkles.css';
import { style, styleVariants } from '@vanilla-extract/css';

export default {
  dropdown: style({
    top: spacing[1],
    position: 'relative',
    display: 'inline-block',
    textAlign: 'left',
  }),
  dropdownBtn: style([
    sprinkles({
      color: 'white',
    }),
    {
      alignItems: 'center',
      display: 'inline-flex',
    },
  ]),
  avatarContainer: style([
    sprinkles({
      width: 8,
      height: 8,
      borderRadius: 'full',
      background: 'gray600',
    }),
    {
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  ]),
  menuItems: style([
    sprinkles({
      zIndex: 30,
      right: 0,
      marginTop: 2,
      borderRadius: 'md',
      background: 'white',
      ring: 1,
      ringColor: 'gray50',
      outline: { focus: 'none' },
      boxShadow: 'large',
    }),
    {
      position: 'absolute',
      transformOrigin: 'top right',
      width: '14rem',
    },
  ]),
  menuItemsTransitions: styleVariants({
    enter: {
      transitionProperty: 'transform, opacity',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '100ms',
    },
    enterFrom: {
      opacity: 0,
      transform: 'scale(0.95)',
    },
    enterTo: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: {
      transitionProperty: 'transform, opacity',
      transitionTimingFunction: 'ease-in',
      transitionDuration: '75ms',
    },
    leaveFrom: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leaveTo: {
      opacity: 0,
      transform: 'scale(0.95)',
    },
  }),
  menuBtn: style([
    sprinkles({
      fontWeight: 'medium',
      paddingX: 4,
      paddingY: 2,
      color: { default: 'gray900', hover: 'blue600' },
    }),
    {
      display: 'block',
    },
  ]),
};
