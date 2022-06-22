const { SUCCESS } = require('../HTTP_STATUS');

const getTalker = async (req, res) => {
  const { authorization } = req.headers;
  if (authorization === undefined) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  console.log(authorization);
  return res.status(SUCCESS).json([]);
};

module.exports = getTalker;
