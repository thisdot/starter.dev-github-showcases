import { style } from '@vanilla-extract/css';
import { sprinkles } from '../../lib/css/sprinkles.css';

export default {
  header: style([
    sprinkles({
      background: 'gray900',
      color: 'white',
      paddingY: 4,
      paddingX: 8,
    }),
    {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  ]),
  navLink: sprinkles({
    fontWeight: 'semibold',
    text: 'lg',
  }),
};
