// models/book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    publishedYear: Number,
    genre: String,
    available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Book', bookSchema);
  