const fs = require('fs').promises;

const getData = async () => {
  const data = await fs.readFile('./talker.json', 'utf-8');
  const json = JSON.parse(data);
  return json;
};

module.exports = getData;
