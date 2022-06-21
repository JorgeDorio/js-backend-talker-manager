const getData = require('./getData');
const { SUCCESS } = require('../HTTP_STATUS');

const getTalker = async (_req, res) => {
  const data = await getData();
  if (data.length) {
    return res.status(SUCCESS).json(data);
  }
  return res.status(SUCCESS).json([]);
};

module.exports = getTalker;
