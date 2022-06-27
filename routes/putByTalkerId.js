const fs = require('fs').promises;
const { SUCCESS } = require('../HTTP_STATUS');
const getData = require('../functions/getData');

const getTalker = async (req, res) => {
  const { id } = req.params;
  const data = await getData();
  const { name, age, talk } = req.body;
  data[id - 1] = { name, age, id, talk };
  const json = JSON.stringify(data);
  await fs.writeFile('./talker.json', json);
  return res.status(SUCCESS).json(data[id - 1]);
};

module.exports = getTalker;
