import { sprinkles } from '@lib/css/sprinkles.css';
import { style } from '@vanilla-extract/css';

export default {
  logo: style([
    sprinkles({
      color: 'white',
    }),
    { overflow: 'visible', verticalAlign: 'middle', display: 'inline-block' },
  ]),
};
