const fs = require('fs')

let ENV = JSON.parse(fs.readFileSync("./Backend/config/stripe.config.json", 'utf-8'))

var stripe = require('stripe')(ENV.secretKey);