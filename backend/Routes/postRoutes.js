const express = require("express");
const Post = require("../models/posts");
const router = express.Router();
const GhostStory = require('../models/GhostStory');

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

router.post("/posts", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json({ message: "Post added!" });
  } catch (err) {
    res.status(400).json({ message: "Failed to add post" });
  }
});

router.post('/ghost_stories', async (req, res) => {
    try {
      const { title, location, Eye_witness, story } = req.body;
      const newStory = new GhostStory({
        title,
        location,
        Eye_witness,
        story,
      });
  
      const savedStory = await newStory.save();
      res.status(201).json({ message: 'Story saved', data: savedStory });
    } catch (error) {
      console.error('Error saving story:', error);
      res.status(500).json({ message: 'Error saving story' });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (!user) return res.status(400).json({ message: "User not found" });
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, user: { email: user.email, name: user.name } });
  });

module.exports = router;
