const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const post = () => mongoose.connection.db;

const getAllCollectionsData = async () => {
  const db = mongoose.connection.db;
  try {
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((col) => col.name);
    const entitiesData = {};
    for (const name of collectionNames) {
      entitiesData[name] = await db.collection(name).find({}).toArray();
    }
    return entitiesData;
  } catch (error) {
    console.error("Error fetching collections:", error);
    throw error;
  }
};

router.get("/entities", async (req, res) => {
  try {
    const data = await getAllCollectionsData();
    res.status(200).json({ message: "Entities retrieved successfully", data });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error: error.toString() });
  }
});

router.get("/entities/:name", async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const entityName = req.params.name;
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((col) => col.name);

    if (!collectionNames.includes(entityName)) {
      return res.status(400).json({ message: "No entity present by this name" });
    }

    const entityData = await db.collection(entityName).find({}).toArray();
    res.status(200).json({ message: "Entity retrieved successfully", data: entityData });
  } catch (error) {
    console.error("Error fetching entity data:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.toString() });
  }
});

router.post("/entities/:name", async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const entityName = req.params.name;
    const entityData = req.body;

    if (!entityData || Object.keys(entityData).length === 0) {
      return res.status(400).json({ message: "Body is Empty" });
    }

    const result = await db.collection(entityName).insertOne(entityData);
    res.status(201).json({ message: "Entity created successfully", data: result });
  } catch (error) {
    console.error("Error creating entity:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.toString() });
  }
});

// Like a post
router.post("/entities/:name/:id/like", async (req, res) => {
  try {
    const { name, id } = req.params;
    const db = mongoose.connection.db;
    const post = await db.collection(name).findOne({ _id: new mongoose.Types.ObjectId(id) });

    if (!post) return res.status(404).json({ message: "Post not found" });

    await db.collection(name).updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      { $inc: { likes: 1 } }
    );

    res.status(200).json({ message: "Liked the post" });
  } catch (error) {
    console.error("Error liking post:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.toString() });
  }
});

// Dislike a post
router.post("/entities/:name/:id/dislike", async (req, res) => {
  try {
    const { name, id } = req.params;
    const db = mongoose.connection.db;
    const post = await db.collection(name).findOne({ _id: new mongoose.Types.ObjectId(id) });

    if (!post) return res.status(404).json({ message: "Post not found" });

    await db.collection(name).updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      { $inc: { dislikes: 1 } }
    );

    res.status(200).json({ message: "Disliked the post" });
  } catch (error) {
    console.error("Error disliking post:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.toString() });
  }
});

// Add a comment
router.post("/entities/:name/:id/comment", async (req, res) => {
  try {
    const { name, id } = req.params;
    const { text } = req.body;
    const db = mongoose.connection.db;

    if (!text || text.trim().length === 0) {
      return res.status(400).json({ message: "Comment cannot be empty" });
    }

    const comment = {
      text,
      timestamp: new Date(),
    };

    await db.collection(name).updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      { $push: { comments: comment } }
    );

    res.status(200).json({ message: "Comment added" });
  } catch (error) {
    console.error("Error adding comment:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.toString() });
  }
});

module.exports = router;
