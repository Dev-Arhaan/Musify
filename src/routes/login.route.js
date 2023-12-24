'use strict';

/**
 * node modules
 */

const router = require('express').Router();

/**
 * custom module
 */

const { login } = require('../controllers/login.controller');

router.get('/', login);


module.exports = router;