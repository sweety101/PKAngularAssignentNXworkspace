var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  id: String,
  volumeInfo: {
    title: String,
    subtitle: String,
    authors: [],
    publisher: String,
    publishDate: String,
    description: String,
    averageRating: Number,
    ratingsCount: Number,
    imageLinks: {
      thumbnail: String,
      smallThumbnail: String,
    },
    pageCount: Number,
    language: String,
  },
  address?: String,
  email?: String,
  name?: String,
  phoneNumber?: String,
});

var Books = mongoose.model('books', bookSchema);

module.exports = {Books};