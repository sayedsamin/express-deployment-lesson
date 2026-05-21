const express = require('express');
const { getProgram } = require('../controller/program.controller.cjs');

const router = express.Router();

router.get('/', getProgram);

module.exports = router;
