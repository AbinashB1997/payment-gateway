var express = require('express');
var controller = require('../controller/getUserData')

var router = express.Router();

router.get('/getUserData', controller.getUserData);

router.post('/postUserData', controller.postUserData)

module.exports = router;