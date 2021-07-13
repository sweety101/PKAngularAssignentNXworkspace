var { Books } = require('../models/bookModel');

const axios = require('axios');

module.exports = function (app) {
  app.get('/getBooks', function (req, res) {
    let key = 'AIzaSyDQO3ciIFhJaxNrRJR93nl9YpjxpTG_YLM';
    let searchString = req.query.searchString;
    let books;
    var bookList = {
      booklist: [],
    };
    let status;
    const getBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=4&keyes&key=${key}`
        );
        status = response.status;
        books = response.data.items;
        for (let i = 0; i < books.length; i++) {
          if (books[i].volumeInfo.imageLinks != undefined) {
            bookList.booklist.push({
              id: books[i].id || '',
              volumeInfo: {
                title: books[i].volumeInfo.title || '',
                subtitle: books[i].volumeInfo.subtitle || '',
                authors: books[i].volumeInfo.authors || '',
                publisher: books[i].volumeInfo.publisher || '',
                publishDate: books[i].volumeInfo.publishDate || '',
                description: books[i].volumeInfo.description || '',
                averageRating: books[i].volumeInfo.averageRating || '',
                ratingsCount: books[i].volumeInfo.ratingsCount || '',
                imageLinks: {
                  thumbnail: books[i].volumeInfo.imageLinks.thumbnail || '',
                  smallThumbnail:
                    books[i].volumeInfo.imageLinks.smallThumbnail || '',
                },
                pageCount: books[i].volumeInfo.pageCount || '',
                language: books[i].volumeInfo.language || '',
              },
            });
          } else {
            bookList.booklist.push({
              id: books[i].id || '',
              volumeInfo: {
                title: books[i].volumeInfo.title || '',
                subtitle: books[i].volumeInfo.subtitle || '',
                authors: books[i].volumeInfo.authors || '',
                publisher: books[i].volumeInfo.publisher || '',
                publishDate: books[i].volumeInfo.publishDate || '',
                description: books[i].volumeInfo.description || '',
                averageRating: books[i].volumeInfo.averageRating || '',
                ratingsCount: books[i].volumeInfo.ratingsCount || '',
                imageLinks: {
                  thumbnail: '',
                  smallThumbnail: '',
                },
                pageCount: books[i].volumeInfo.pageCount || '',
                language: books[i].volumeInfo.language || '',
              },
            });
          }
        }
        Books.create(bookList.booklist, function (err, results) {
          res.send(results);
        });
      } catch (e) {
        if (status !== 200 || e) {
          status = e.response.status;
          Books.create(bookList.booklist, function (err, results) {
            if (status !== 200) {
              res.send(status);
            }
          });
        }
      }
    };
    getBooks();
  });
};
