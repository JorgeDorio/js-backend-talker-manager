const validateDate = require('validate-date');
const { BAD_REQUEST } = require('../HTTP_STATUS');

const verifyTalkKeys = async (req, res, next) => {
  const { talk } = req.body;
  const responseType = 'boolean';
  const dateIsValid = validateDate(JSON.stringify(talk.watchedAt), responseType);
  if (!dateIsValid) {
    return res.status(BAD_REQUEST).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  } if (typeof (talk.rate) !== 'number' || talk.rate > 5 || talk.rate < 1) {
    return res.status(BAD_REQUEST).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

module.exports = verifyTalkKeys;
