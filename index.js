const MongoClient = require("mongodb").MongoClient
const insert = require("./insert.js")


const url = "mongodb://localhost:27017/socialmedia"

MongoClient.connect(url, (err, db) => {
	console.log("Connected to mongodb server")
	insert(db)
	db.close()
})
