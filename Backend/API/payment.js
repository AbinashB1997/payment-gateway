var express = require('express');
var controller = require('../controller/paymentController')

var router = express.Router();

router.post('/payment', controller.payment);

module.exports = router;