const express = require('express');
const router = express.Router();

const postUser = require('../controller/usersController');

router.post('/', postUser)

module.exports = router;