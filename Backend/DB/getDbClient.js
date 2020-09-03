const MongoClient = require('mongodb').MongoClient;
const fs = require('fs')

let ENV = JSON.parse(fs.readFileSync("./Backend/config/db.config.json", 'utf-8'))

exports.client = async function() {
    try {
        /*
            For node js driver version 3.6+, use the following URL
            const url = `mongodb+srv://${ENV.username}:${ENV.password}@${ENV.clusterUrl}?${ENV.allowedValues}`;
        */
        const url = `mongodb://${ENV.username}:${ENV.password}@<HOST1>,<HOST2>,<HOST3>/<database>?<allowedValues>`
        var Client = await MongoClient.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database Connection established`)
        return Client;
    } catch(ex) {
        console.log(`Error Connecting to Database`)
        console.log(ex)
    }
}