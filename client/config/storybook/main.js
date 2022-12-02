// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // eslint-disable-next-line no-undef
    config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
