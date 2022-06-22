const express = require('express');
const getTalker = require('./routes/getTalker');
const getTalkerById = require('./routes/getTalkerById');
const postLogin = require('./routes/postLogin');
const postTalker = require('./routes/postTalker');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');

const router = express.Router();

router.get('/talker', getTalker);
router.post('/talker', postTalker);
router.get('/talker/:id', getTalkerById);
router.post('/login', validateEmail, validatePassword, postLogin);

module.exports = router;
