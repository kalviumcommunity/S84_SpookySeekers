const mongoose = require('mongoose');

const GhostStorySchema = new mongoose.Schema({
  title: String,
  location: String,
  Eye_witness: String,
  story: String
});

module.exports = mongoose.model('GhostStory', GhostStorySchema);
