module.exports = config => {
  /**
   * Webpack overrides SystemJS.import() by default.
   * This config override enables import() other than the
   * built-in in Webpack.
   *
   * https://github.com/webpack/webpack/issues/7974#issuecomment-417932126
   */
  config.module.rules.push({
    parser: {
      system: false
    }
  });

  return config;
};
