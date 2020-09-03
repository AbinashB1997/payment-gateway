var fs = require('fs')

let ENV = JSON.parse(fs.readFileSync("./Backend/config/routes.config.json", 'utf-8'))

exports.homePage = async function(req, res) {
    console.log('###Inside controller/homePage')
    res.render('Register', {
        regEndpoint : eval(ENV.endpoints.server) + ENV.routes.reg,
        loginEndpoint : eval(ENV.endpoints.server) + ENV.routes.login,
    })
}