const Solid = require('vite-plugin-solid');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-addon-mock',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/html',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    config.resolve.dedupe = ['@storybook/client-api'];
    config.plugins.unshift(
      Solid({
        hot: false,
      })
    );
    config.optimizeDeps = {
      include: [...config.optimizeDeps.include, 'msw'],
    };

    return config;
  },
};
