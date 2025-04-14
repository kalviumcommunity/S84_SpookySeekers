const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    minlength: 3
  },
  description: {
    type: String,
    required: true,
    minlength: 150
  },
  witness: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: ""
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  },
  comments: {
    type: [String],
    default: []
  }
});

module.exports = mongoose.model("Post", postSchema);
