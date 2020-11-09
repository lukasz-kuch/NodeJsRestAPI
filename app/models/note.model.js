const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: String,
  content: String,
  created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Note', NoteSchema);
