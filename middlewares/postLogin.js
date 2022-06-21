const getData = require('../functions/getData');
const { SUCCESS } = require('../HTTP_STATUS');
const generateToken = require('../functions/generateToken');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const token = generateToken(email, password);

  return res.status(SUCCESS).json({ "token": token });
};

module.exports = postLogin;
