const fs = require('fs').promises;
const { CREATED } = require('../HTTP_STATUS');
const getData = require('../functions/getData');

const getTalker = async (req, res) => {
  const data = await getData();
  const lastId = data[data.length - 1].id;
  const newTalker = req.body;
  newTalker.id = lastId + 1;
  data.push(newTalker);
  const json = JSON.stringify(data);
  await fs.writeFile('./talker.json', json);
  return res.status(CREATED).json(newTalker);
};

module.exports = getTalker;
