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
var getUserDataApi = require('./Backend/API/getUserData')
var paymentConfirmationApi = require('./Backend/API/paymentConfirmation')
var controller = require('./Backend/controller/homePage')
var routes = require('./Backend/config/routes.config.json')

app.use('/', RegisterApi, LoginApi, getUserDataApi, paymentApi, paymentConfirmationApi);

app.get('/', controller.homePage)

app.listen(3000, () => {
    console.log(`app is running in ${eval(routes.endpoints.server)}`);
})