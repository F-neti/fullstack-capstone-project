const express = require("express");
const router = express.Router();

const { MongoClient, ObjectId } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URL);

router.get("/current-user/:id", async (req, res) => {
  try {
    await client.connect();

    const db = client.db("giftdb");
    const collection = db.collection("users");

    const currentUser = await collection.findOne({
      _id: new ObjectId(req.params.id)
    });

    if (!currentUser) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json(currentUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;