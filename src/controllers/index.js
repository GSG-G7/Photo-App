const express = require('express');
const home = require('./home');
const { client, server } = require('./error');

const router = express.Router();

router.get('/', home);
router.use(client);
router.use(server);

module.exports = router;
