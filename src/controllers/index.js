const express = require('express');
const home = require('./home');
const search = require('./search');

const router = express.Router();

router.get('/', home);
router.post('/search', search);
module.exports = router;
