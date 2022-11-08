const { Router } = require('express');
const Book = require('../models/Book.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const book = await Book.getById(req.params.id);
    const filteredBook = {
      title: book.title,
      released: book.released,
      authors: book.authors.map(({ id, name }) => ({ id, name })),
    };
    res.json(filteredBook);
  })
  .get('/', async (req, res) => {
    const books = await Book.getAll();
    res.json(books);
  });
