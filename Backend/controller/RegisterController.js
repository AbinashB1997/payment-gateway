var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors')
var getDatabaseOperations = require("../DB/crudJob")

router.use(express.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(cors());

var isValidUser = async function(email, password) {
    var doExist = await getDatabaseOperations.exists('login', 'user_info', email)
    return doExist
}

exports.register = async function(req, res) {
    try {
        console.log(req.body)
        var email = req.body.email
        var username = req.body.username
        var password = req.body.password
        var isValid = await isValidUser(email)
        if(isValid) {
            res.send({"status" : "usernameExists"})
        }else {
            await getDatabaseOperations.put('login', 'user_info', {"email" : email, "username" : username, "password" : password})
            res.send({"status" : "Success"})
        }
    } catch (ex) {
        console.log(ex)
        res.send({"status" : "exceptionFound"})
    }
}