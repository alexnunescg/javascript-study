const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

const db = mongoose.connect('mongodb://localhost/bookAPI');
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to My Nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
