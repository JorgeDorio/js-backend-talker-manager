const crypto = require('crypto-js');

const generateToken = (email, password) => {
  const token = crypto.AES.encrypt(email, password).toString();
  const shortToken = token.substring(17, 1);

  return shortToken;
};

module.exports = generateToken;
