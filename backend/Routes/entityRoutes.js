const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Entity Schema
const entitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Entity = mongoose.models.Entity || mongoose.model("Entity", entitySchema);

router.get("/entities", async (req, res) => {
  try {
    const entities = await Entity.find();
    res.json(entities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching entities", error });
  }
});

router.post("/entities", async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: "Both name and description are required and cannot be empty." });
  }

  try {
    const newEntity = new Entity({ name, description });
    await newEntity.save();
    res.status(201).json({ message: "Entity added successfully", entity: newEntity });
  } catch (error) {
    res.status(500).json({ message: "Error adding entity", error });
  }
});

// Like a post
router.post("/entities/:id/like", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Entity.findByIdAndUpdate(id, {
      $inc: { likes: 1 }
    }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error liking entity", error: err });
  }
});

// Dislike a post
router.post("/entities/:id/dislike", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Entity.findByIdAndUpdate(id, {
      $inc: { dislikes: 1 }
    }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error disliking entity", error: err });
  }
});

// Add a comment
router.post("/entities/:id/comment", async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    if (!text || text.trim() === "") {
      return res.status(400).json({ message: "Comment cannot be empty" });
    }
    const updated = await Entity.findByIdAndUpdate(id, {
      $push: { comments: { text: text.trim() } }
    }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error adding comment", error: err });
  }
});

// Increment share count (optional)
router.post("/entities/:id/share", async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Entity.findByIdAndUpdate(id, {
      $inc: { shares: 1 }
    }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error sharing entity", error: err });
  }
});


module.exports = router;