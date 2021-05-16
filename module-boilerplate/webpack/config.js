/**
 * Webpack main configuration.
 * Based on the environment, development or
 * production configuration is loaded.
 */
const { loadConfigs } = require('@mdrajibul/cloud-config-utils');
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

const developmentConfig = require('./development.config');
const productionConfig = require('./production.config');

module.exports = async env => {  
  if (env && env.environment === 'production') {
    return productionConfig;
  }
  const configData = await loadConfigs();
  if (configData) {
    fs.writeFileSync(path.join(process.cwd(), `/src/profile.json`), JSON.stringify(configData));
  }
  return developmentConfig;
};
