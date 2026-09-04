const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

async function connectToDatabase() {
  await client.connect();
  console.log("Connected to MongoDB");

  return client.db("giftdb");
}

module.exports = { connectToDatabase };