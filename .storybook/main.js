const autoPreprocess = require('svelte-preprocess');

const webpackConfig = (config) => {
  // svelte setup
  const svelteLoader = config.module.rules.find(
    r => r.loader && r.loader.includes('svelte-loader'),
  );

  svelteLoader.options.preprocess = autoPreprocess();
  config.resolve.extensions.push('.ts', '.tsx', '.svelte');

  // typeScript setup
  const configWithTs = {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    }
  }

  return configWithTs;
}

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions/register',
  ],
  webpackFinal: webpackConfig
};