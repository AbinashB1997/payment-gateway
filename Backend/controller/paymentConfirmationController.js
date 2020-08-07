exports.paymentSuccess = async function(req, res) {
    console.log('###Inside controller/paymentSuccess')
    res.render('successfulPayment')
}

exports.paymentFailure = async function(req, res) {
    console.log('###Inside controller/paymentFailure')
    res.render('failurePayment')
}