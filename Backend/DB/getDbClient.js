const MongoClient = require('mongodb').MongoClient;
const fs = require('fs')

let ENV = JSON.parse(fs.readFileSync("./Backend/config/db.config.json", 'utf-8'))

exports.client = async function() {
    const url = `mongodb+srv://${ENV.username}:${ENV.password}@${ENV.clusterUrl}?${ENV.allowedValues}`;
    return await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}