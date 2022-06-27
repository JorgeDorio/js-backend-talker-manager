const { SUCCESS } = require('../HTTP_STATUS');
const getData = require('../functions/getData');

const getTalkerByName = async (req, res) => {
  const { q } = req.query;
  const data = await getData();
  const filtered = data.filter((talker) => talker.name.indexOf(q) !== -1);

  return res.status(SUCCESS).json(filtered);
};

module.exports = getTalkerByName;
