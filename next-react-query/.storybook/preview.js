import '!style-loader!css-loader!postcss-loader!../src/styles/globals.css';
import { addDecorator } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as nextImage from 'next/image';
import Image from '../__mocks__/nextImage.jsx';

initialize();
addDecorator(mswDecorator);

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: Image,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
