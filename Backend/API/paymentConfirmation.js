var express = require('express');
var controller = require('../controller/paymentConfirmationController')

var router = express.Router();

router.get('/successfulPaymentConfirmation', controller.paymentSuccess)

router.get('/failurePaymentConfirmation', controller.paymentFailure)

module.exports = router;