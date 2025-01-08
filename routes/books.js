const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// List all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.render('books/list', { books });
});

// Show form to add a new book
router.get('/new', (req, res) => {
  res.render('books/add');
});

// Add a new book
router.post('/', async (req, res) => {
  const { title, author, description, publishedYear, genre } = req.body;
  const newBook = new Book({ title, author, description, publishedYear, genre });
  await newBook.save();
  res.redirect('/books');
});

// Show details of a specific book
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('books/details', { book });
});

// Show form to edit a book
router.get('/:id/edit', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('books/edit', { book });
});

// Update a book
router.put('/:id', async (req, res) => {
  const { title, author, description, publishedYear, genre, available } = req.body;
  await Book.findByIdAndUpdate(req.params.id, { title, author, description, publishedYear, genre, available });
  res.redirect(`/books/${req.params.id}`);
});

// Delete a book
router.delete('/:id', async (req, res) => {
  await Book.findByIdAndRemove(req.params.id);
  res.redirect('/books');
});

module.exports = router;
