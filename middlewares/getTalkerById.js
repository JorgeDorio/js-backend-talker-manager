const getData = require('../functions/getData');
const { SUCCESS, NOT_FOUND } = require('../HTTP_STATUS');

const getTalkerById = async (req, res) => {
  const data = await getData();
  const reqId = req.params;
  const talkerById = data.filter((talker) => Number(talker.id) === Number(reqId.id));
  if (talkerById.length) {
    return res.status(SUCCESS).json(talkerById[0]);
  }
  return res.status(NOT_FOUND).json({ message: 'Pessoa palestrante não encontrada' });
};

module.exports = getTalkerById;
