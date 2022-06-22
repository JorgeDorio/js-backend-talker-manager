const { SUCCESS } = require('../HTTP_STATUS');
const generateToken = require('../functions/generateToken');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const token = generateToken(email, password);

  return res.status(SUCCESS).json({ token });
};

module.exports = postLogin;
