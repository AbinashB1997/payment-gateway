const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

let ENV = JSON.parse(fs.readFileSync("./Backend/config/stripe.config.json", 'utf-8'))
let PayEnv = JSON.parse(fs.readFileSync("./Backend/config/paymentData.config.json", 'utf-8'))

var stripe = require('stripe')(ENV.secretKey);

var router = express.Router();
router.use(express.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(cors());

exports.paymentInitialize = async function(req, res) {
    console.log('###Inside paymentInit')
    res.render('paymentHome', {
       key: ENV.publishableKey
    })
}

exports.paymentProcessing = async function(req, res) {
    console.log('###Inside paymentProcessing')
    console.log(req.body)
    try {
        var customer = await stripe.customers.create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken,
            name : PayEnv.name,
            address : PayEnv.address
        });

        await stripe.charges.create({
            amount: 2500,     // Charing Rs 25
            description: PayEnv.description,
            currency: PayEnv.currency,
            customer: customer.id
        });
        res.redirect('/successfulPaymentConfirmation')
    } catch(ex) {
        console.log(ex)
        res.redirect('/failedPaymentConfirmation')
    }
}