// Original: https://github.com/dracula/visual-studio-code

import type { PrismTheme } from '../types/model';

export const dracula: PrismTheme = {
  plain: {
    color: '#F8F8F2',
    'background-color': '#282A36',
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: 'rgb(189, 147, 249)',
      },
    },
    {
      types: ['inserted', 'function'],
      style: {
        color: 'rgb(80, 250, 123)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)',
      },
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 184, 108)',
      },
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        color: 'rgb(248, 248, 242)',
      },
    },
    {
      types: ['string', 'char', 'tag', 'selector'],
      style: {
        color: 'rgb(255, 121, 198)',
      },
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: 'rgb(189, 147, 249)',
        'font-style': 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(98, 114, 164)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(241, 250, 140)',
      },
    },
  ],
};
