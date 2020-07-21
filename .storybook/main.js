const autoPreprocess = require('svelte-preprocess');

const webpackConfig = (config) => {
  const svelteLoader = config.module.rules.find(
    r => r.loader && r.loader.includes('svelte-loader'),
  );

  svelteLoader.options.preprocess = autoPreprocess();
  config.resolve.extensions.push('.ts', '.tsx', '.svelte');
  return config;
}

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-docs'],
  webpackFinal: webpackConfig
};