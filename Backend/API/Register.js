var express = require('express');
var controller = require('../controller/RegisterController')

var router = express.Router();

router.post('/register', controller.register);

module.exports = router;