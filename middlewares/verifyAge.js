const { BAD_REQUEST } = require('../HTTP_STATUS');

const verifyAge = async (req, res, next) => {
  const { age } = req.body;
  if (age === undefined) {
    return res.status(BAD_REQUEST).json({ message: 'O campo "age" é obrigatório' });
  } if (age < 18) {
    return res.status(BAD_REQUEST).json({
      message: 'A pessoa palestrante deve ser maior de idade',
    });
  }
  next();
};

module.exports = verifyAge;
