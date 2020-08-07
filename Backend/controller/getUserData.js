exports.getUserData = async function(req, res) {
    console.log('###Inside controller/getUserData')
    res.render('getUserData')
}

exports.postUserData = async function(req, res) {
    console.log("###Inside controller/postUserData")
    try {
        // Return the body to the payment APIs, so that they will receive the amount
        res.redirect(`/paymentInit?amount=${req.body.amount}`)
    } catch(ex) {
        console.log(ex)
    }
}