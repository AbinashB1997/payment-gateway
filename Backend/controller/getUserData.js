var fs = require('fs')

let ENV = JSON.parse(fs.readFileSync("./Backend/config/routes.config.json", 'utf-8'))

exports.getUserData = async function(req, res) {
    console.log('###Inside controller/getUserData')
    res.render('getUserData', {
        endpoint : eval(ENV.endpoints.server) + ENV.routes.userData
    })
}

exports.postUserData = async function(req, res) {
    console.log("###Inside controller/postUserData")
    try {
        // Return the body to the payment APIs, so that they will receive the amount
        // req.session.amount = req.body.amount * 100
        res.redirect(`/paymentInit?amount=${req.body.amount * 100}`)
    } catch(ex) {
        console.log(ex)
    }
}