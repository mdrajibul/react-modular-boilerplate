const { loadConfigs } = require('@mdrajibul/cloud-config-utils');
const fs = require('fs');
const path = require('path');

async function generateProfile() {
  let configData = await loadConfigs();
  if (configData) {
    fs.writeFileSync(path.join(process.cwd(), `/src/profile.json`), JSON.stringify(configData));
  }
}

generateProfile();
