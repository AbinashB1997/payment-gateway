const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(__dirname + '/UI'))
app.set('view engine', 'ejs');
app.set('views', './UI/')

var LoginApi = require('./Backend/API/login')
var paymentApi = require('./Backend/API/payment')
var RegisterApi = require('./Backend/API/Register')
var controller = require('./Backend/controller/homePage')

app.use('/', RegisterApi, LoginApi, paymentApi);

app.get('/', controller.homePage)

app.listen(3000, () => {
    console.log("app is running in http://localhost:3000");
})