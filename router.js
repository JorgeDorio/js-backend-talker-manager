const express = require('express');
const getTalker = require('./mid/getTalker');
const getTalkerById = require('./mid/getTalkerById');

const router = express.Router();

router.get('/talker', getTalker);
router.get('/talker/:id', getTalkerById);

module.exports = router;
