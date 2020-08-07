const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

let ENV = JSON.parse(fs.readFileSync("./Backend/config/stripe.config.json", 'utf-8'))

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
            name: 'Gourav Hammad',
            address: {
                line1: 'TC 9/4 Old MES colony',
                postal_code: '452331',
                city: 'Indore',
                state: 'Madhya Pradesh',
                country: 'India',
            }
        });

        await stripe.charges.create({
            amount: 2500,     // Charing Rs 25
            description: 'Web Development Product',
            currency: 'INR',
            customer: customer.id
        });
        res.redirect('/successfulPaymentConfirmation')
    } catch(ex) {
        console.log(ex)
        res.redirect('/failedPaymentConfirmation')
    }
}