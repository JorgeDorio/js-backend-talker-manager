const validator = require('email-validator');
const { BAD_REQUEST } = require('../HTTP_STATUS');

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailIsValid = validator.validate(email);
  if (email === undefined || email.length === 0) {
    return res.status(BAD_REQUEST).json({ message: 'O campo "email" é obrigatório' });
  } if (!emailIsValid) {
    return res.status(BAD_REQUEST).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
  next();
};

module.exports = validateEmail;
