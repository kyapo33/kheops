/* eslint-disable */
const CracoAlias = require('craco-alias');

module.exports = {
  eslint: {
    enable: false,
  },
  style: {
    css: {
      loaderOptions: ((cssLoaderOptions) => ({
        ...cssLoaderOptions,
        modules: {
          auto: true,
          exportLocalsConvention: 'camelCase',
        },
      })),
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};