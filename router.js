const express = require('express');
const getTalker = require('./routes/getTalker');
const getTalkerById = require('./routes/getTalkerById');
const postLogin = require('./routes/postLogin');
const verifyLogin = require('./middlewares/verifyLogin');

const router = express.Router();

router.get('/talker', getTalker);
router.get('/talker/:id', getTalkerById);
router.post('/login', verifyLogin, postLogin)

module.exports = router;
