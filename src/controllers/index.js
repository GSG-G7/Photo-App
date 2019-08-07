const express = require('express');
const home = require('./home');
const { client, server } = require('./error');
const search = require('./search');

const router = express.Router();

router.get('/', home);
router.post('/search', search);
router.use(client);
router.use(server);

module.exports = router;
