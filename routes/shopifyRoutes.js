const express = require('express');
const shopifyController = require('../cotroller/shopifyController');

const router = express.Router();

router.get('', shopifyController.getApi);

module.exports = router;
