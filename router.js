const express = require('express');
const getTalker = require('./routes/getTalker');
const getTalkerById = require('./routes/getTalkerById');
const postLogin = require('./routes/postLogin');
const postTalker = require('./routes/postTalker');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const verifyToken = require('./middlewares/verifyToken');
const verifyName = require('./middlewares/verifyName');
const verifyAge = require('./middlewares/verifyAge');
const verifyTalk = require('./middlewares/verifyTalk');
const verifyTalkKeys = require('./middlewares/verifyTalkKeys');

const router = express.Router();

router.get('/talker', getTalker);
router.post('/talker', verifyToken, verifyName, verifyAge, verifyTalk, verifyTalkKeys, postTalker);
router.get('/talker/:id', getTalkerById);
router.post('/login', validateEmail, validatePassword, postLogin);

module.exports = router;
