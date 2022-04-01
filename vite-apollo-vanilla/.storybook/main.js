const path = require('path')
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin')


module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['@lib'] = path.resolve(__dirname, '../src/lib');
    config.resolve.alias['@context'] = path.resolve(__dirname, '../src/context');
    config.plugins.push(vanillaExtractPlugin())

    // return the customized config
    return config;
  },
};
