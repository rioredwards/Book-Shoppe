const { Router } = require('express');
const Author = require('../models/Author.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const author = await Author.getById(req.params.id);
    const filteredAuthor = {
      name: author.name,
      dob: author.dob,
      pob: author.pob,
      books: author.books.map(({ id, title, released }) => ({
        id,
        title,
        released,
      })),
    };
    res.json(filteredAuthor);
  })
  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    res.json(authors);
  });
