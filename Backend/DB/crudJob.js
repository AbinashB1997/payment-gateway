var dbClient = require('./getDbClient').client()

exports.put = async function(database, collection, data) {
    try {
        var db = (await dbClient).db(database)
        await db.collection(collection).insertOne(data)
        console.log("inserted")
        // ;(await dbClient).close();
    } catch(ex) {
        console.log(ex)
    }
}

exports.get = async function(database, collection) {
    try {
        var db = (await dbClient).db(database)
        console.log("data found are ...")
        var userData = await db.collection(collection).find({}).toArray();
        console.log(userData)
        // ;(await dbClient).close();
        return userData
    } catch(ex) {
        console.log(ex)
    }
}

exports.drop = async function(database, collection, username) {
    try {
        var db = (await dbClient).db(database)
        await db.collection(collection).deleteOne({"username" : username})
        console.log("document removed from collection")
        // ;(await dbClient).close();
        return true
    } catch (ex) {
        console.log(ex)
        return false
    }
}

exports.exists = async function(database, collection, email) {
    try {
        var db = (await dbClient).db(database)
        var count = await db.collection(collection).countDocuments({"email" : email})
        console.log(`Total ${count} document found`)
        // ;(await dbClient).close()
        return (count > 0) ? true : false
    } catch (ex) {
        console.log(ex)
    }
}