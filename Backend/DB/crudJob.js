var dbClient = require('./getDbClient').client()

exports.put = async function(database, collection, data) {
    try {
        var db = (await dbClient).db(database)
        await db.collection(collection).insertOne(data)
        console.log("inserted")
        return {"status" : "success"}
        // ;(await dbClient).close();
    } catch(ex) {
        console.log(ex)
        return {"status" : "failure"}
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
        return {"status" : "failure"}
    }
}

exports.drop = async function(database, collection, username) {
    try {
        var db = (await dbClient).db(database)
        await db.collection(collection).deleteOne({"username" : username})
        console.log("document removed from collection")
        // ;(await dbClient).close();
        return {"status" : "success"}
    } catch (ex) {
        console.log(ex)
        return {"status" : "failure"}
    }
}

exports.exists = async function(database, collection, email) {
    try {
        var db = (await dbClient).db(database)
        var count = await db.collection(collection).countDocuments({"email" : email})
        console.log(`Total ${count} document found`)
        // ;(await dbClient).close()
        if (count > 0) {
            return {"status" : "success"}
        }
        return {"status" : "failure"}
    } catch (ex) {
        console.log(ex)
        return {"status" : "failure"}
    }
}