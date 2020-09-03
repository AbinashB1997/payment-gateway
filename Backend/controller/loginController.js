var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors')
var getDatabaseOperations = require("../DB/crudJob")

router.use(express.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(cors());

var isValidUser = async function(email, password) {
    var doExist = await getDatabaseOperations.exists('login', 'user_info', email, password)
    return doExist
}

exports.login = async function(req, res) {
    try {
        console.log(req.body)
        var email = req.body.email
        var password = req.body.password
        var isValid = await isValidUser(email, password)
        if(isValid.status === "success") {
            res.redirect("/getUserData")
            // res.send({"status" : "success"})
        }else {
            res.send({"status" : "failure"})
        }
    } catch (ex) {
        console.log(ex)
        res.send({"status" : "exceptionFound"})
    }
}