/* eslint-disable no-param-reassign */
const express = require('express');
const booksController = require('../controllers/booksController');

function routes(Book) {
  const bookRouter = express.Router();
  const controller = booksController(Book);

  bookRouter.route('/books')
    .get(controller.get)
    .post(controller.post);

  bookRouter.use('/books/:bookId', controller.middleware);

  bookRouter.route('/books/:bookId')
    .get(controller.getById)
    .put(controller.put)
    .patch(controller.patch)
    .delete(controller.deleteById);

  return bookRouter;
}

module.exports = routes;
