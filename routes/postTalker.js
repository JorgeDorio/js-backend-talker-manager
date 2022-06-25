const { CREATED } = require('../HTTP_STATUS');
const getData = require('../functions/getData');
const fs = require('fs').promises;

const getTalker = async (req, res) => {
  const data = await getData();
  const lastId = data[data.length - 1].id;
  const newTalker = req.body;
  newTalker.id = lastId + 1;
  data.push(newTalker);
  const json = JSON.stringify(data);
  fs.writeFile('../talker.json', json, 'utf-8');
  return res.status(CREATED).json(newTalker);
};

module.exports = getTalker;
