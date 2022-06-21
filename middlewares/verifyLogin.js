const validator = require("email-validator");
const { BAD_REQUEST } = require('../HTTP_STATUS');

const verifyLogin = (req, res, next) => {
  const { email, password } = req.body;
  const emailIsValid = validator.validate(email);
  if (email == undefined || email.length == 0) {
    return res.status(BAD_REQUEST).json({ "message": 'O campo "email" é obrigatório' });
  } else if (!emailIsValid) {
    return res.status(BAD_REQUEST).json({ "message": 'O "email" deve ter o formato "email@email.com"' })
  } else if (password == undefined || password.length == 0) {
    return res.status(BAD_REQUEST).json({ "message": 'O campo "password" é obrigatório' })
  } else if (password.length < 6) {
    return res.status(BAD_REQUEST).json({ "message": 'O "password" deve ter pelo menos 6 caracteres' })
  } else {
    next();
  }
}

module.exports = verifyLogin;
