const fs = require('fs').promises;
const { NO_CONTENT } = require('../HTTP_STATUS');
const getData = require('../functions/getData');

const getTalker = async (req, res) => {
  const { id } = req.params;
  const data = await getData();
  const deleted = data.filter((talker) => Number(talker.id) !== Number(id));
  console.log(deleted);
  fs.writeFile('./talker.json', JSON.stringify(deleted));

  return res.status(NO_CONTENT).end();
};

module.exports = getTalker;