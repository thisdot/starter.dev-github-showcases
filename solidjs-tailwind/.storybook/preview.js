import { createRoot } from 'solid-js';
import { insert, template, createComponent } from 'solid-js/web';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import '../src/index.css';

initialize();

export const decorators = [
  mswDecorator,
  (Story) =>
    createRoot(() => {
      const element = template('<div/>').cloneNode(true);
      insert(element, createComponent(Story, {}));
      return element;
    }),
];

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
