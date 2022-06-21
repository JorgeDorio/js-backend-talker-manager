const express = require('express');
const getTalker = require('./middlewares/getTalker');
const getTalkerById = require('./middlewares/getTalkerById');
const postLogin = require('./middlewares/postLogin');

const router = express.Router();

router.get('/talker', getTalker);
router.get('/talker/:id', getTalkerById);
router.post('/login', postLogin)

module.exports = router;
