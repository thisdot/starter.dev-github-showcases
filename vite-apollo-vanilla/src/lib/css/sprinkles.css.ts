import { createVar, fallbackVar } from '@vanilla-extract/css';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { mapValues } from 'lodash';
import breakpoints from './breakpoints';
import colors from './colors';
import spacing from './spacing';

export const vars = {
  ringColor: createVar(),
  ringShadow: createVar(),
  boxShadow: createVar(),
};

const negativeSpacing = Object.fromEntries(
  Object.entries(spacing).map(([k, v]) => [`-${k}`, `-${v}`])
) as { [K in keyof typeof spacing as `-${K}`]: string };

const createShadow = (varName: 'ringShadow' | 'boxShadow', shadow: string) => ({
  vars: {
    [vars[varName]]: shadow,
  },
  boxShadow: `${fallbackVar(vars.ringShadow, '0 0 #0000')}, ${fallbackVar(
    vars.boxShadow,
    '0 0 #0000'
  )}`,
});

const responsiveProperties = defineProperties({
  conditions: breakpoints,
  defaultCondition: 'mobile',
  properties: {
    paddingTop: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    paddingBottom: spacing,
    marginTop: { ...negativeSpacing, ...spacing },
    marginLeft: { ...negativeSpacing, ...spacing },
    marginRight: { ...negativeSpacing, ...spacing },
    marginBottom: { ...negativeSpacing, ...spacing },
    width: spacing,
    height: spacing,
    left: spacing,
    right: spacing,
    fontWeight: {
      light: '300',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    text: {
      xs: { fontSize: '0.75rem', lineHeight: '1rem' },
      sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
      base: { fontSize: '1rem', lineHeight: '1.5rem' },
      lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },
      xl: { fontSize: '1.25rem', lineHeight: '1.75rem' },
      '2xl': { fontSize: '1.5rem', lineHeight: '2rem' },
    },
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

const focusProperties = defineProperties({
  conditions: {
    default: {},
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
  },
  defaultCondition: 'default',
  properties: {
    background: colors,
    color: colors,
    ringColor: mapValues(colors, (color) => ({
      vars: { [vars.ringColor]: color },
    })),
    outline: ['none'],
    ring: {
      0: createShadow('ringShadow', `0 0 0 calc(0px) ${vars.ringColor}`),
      1: createShadow('ringShadow', `0 0 0 calc(1px) ${vars.ringColor}`),
      2: createShadow('ringShadow', `0 0 0 calc(2px) ${vars.ringColor}`),
      3: createShadow('ringShadow', `0 0 0 calc(3px) ${vars.ringColor}`),
    },
  },
});

const otherProperties = defineProperties({
  properties: {
    zIndex: ['auto', 0, 10, 20, 30],
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      full: '9999px',
    },
    boxShadow: {
      small: createShadow('boxShadow', '0 1px 2px 0 rgb(0 0 0 / 0.05)'),
      large: createShadow(
        'boxShadow',
        '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
      ),
      none: createShadow('boxShadow', '0 0 #0000'),
    },
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  focusProperties,
  otherProperties
);
