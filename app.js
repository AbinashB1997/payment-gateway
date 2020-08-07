const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

var LoginApi = require('./Backend/API/login')
// var paymentApi = require('./Backend/API/payment')
var RegisterApi = require('./Backend/API/Register')

app.use('/', RegisterApi, LoginApi);

app.listen(3000,() => {
    console.log("app is running in http://localhost:3000");
})