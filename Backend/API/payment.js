var express = require('express');
var controller = require('../controller/paymentController')

var router = express.Router();

router.get('/paymentInit', controller.paymentInitialize)

router.post('/paymentProcess', controller.paymentProcessing);

module.exports = router;