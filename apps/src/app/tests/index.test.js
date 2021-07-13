const request = require('supertest');
const app = require('../../index');
const axios = require('axios');
var { Books } = require('../models/bookModel');
jest.mock('axios');
test('Should get books from google books api', async () => {
  const resp = {
    statusText: 'succeeded',
    status: '200',
    data: {
      items: [
        {
          id: 'ppjUtAEACAAJ',
          volumeInfo: {
            title: 'Fullstack React',
            subtitle: 'The Complete Guide to ReactJS and Friends',
            authors: ['Accomazzo Anthony', 'Murray Nathaniel', 'Ari Lerner'],
            publisher: 'Fullstack.IO',
            publishDate: '2017-03',
            description:
              'LEARN REACT TODAY The up-to-date, in-depth, complete guide to React and friends. Become a ReactJS expert today',
            averageRating: 0,
            ratingsCount: 0,
            imageLinks: {
              thumbnail:
                'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
              smallThumbnail:
                'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            },
            pageCount: 836,
            language: 'en',
          },
        },
        {
          id: 'tjjrDwAAQBAJ',
          volumeInfo: {
            title: 'Learning React',
            subtitle: 'Modern Patterns for Developing React Apps',
            authors: ['Alex Banks', 'Eve Porcello'],
            publisher: '"O\'Reilly Media, Inc."',
            publishDate: '2020-06-12',
            description:
              'If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript,...',
            averageRating: 0,
            ratingsCount: 0,
            imageLinks: {
              thumbnail:
                'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
              smallThumbnail:
                'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            },
            pageCount: 310,
            language: 'en',
          },
        },
      ],
    },
  };
  const response = await request(app)
    .get('/getBooks')
    .send(resp.data.items)
    .expect(200);
});
test('Should populate books from google books api', async () => {
  const resp = {
    statusText: 'succeeded',
    status: '200',
    data: {
      items: [
        {
          id: 'ppjUtAEACAAJ',
          volumeInfo: {
            title: 'Fullstack React',
            subtitle: 'The Complete Guide to ReactJS and Friends',
            authors: ['Accomazzo Anthony', 'Murray Nathaniel', 'Ari Lerner'],
            publisher: 'Fullstack.IO',
            publishDate: '2017-03',
            description:
              'LEARN REACT TODAY The up-to-date, in-depth, complete guide to React and friends. Become a ReactJS expert today',
            averageRating: 0,
            ratingsCount: 0,
            imageLinks: {
              thumbnail:
                'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
              smallThumbnail:
                'http://books.google.com/books/content?id=ppjUtAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
            },
            pageCount: 836,
            language: 'en',
          },
        },
        {
          id: 'tjjrDwAAQBAJ',
          volumeInfo: {
            title: 'Learning React',
            subtitle: 'Modern Patterns for Developing React Apps',
            authors: ['Alex Banks', 'Eve Porcello'],
            publisher: '"O\'Reilly Media, Inc."',
            publishDate: '2020-06-12',
            description:
              'If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript,...',
            averageRating: 0,
            ratingsCount: 0,
            imageLinks: {
              thumbnail:
                'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
              smallThumbnail:
                'http://books.google.com/books/content?id=tjjrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            },
            pageCount: 310,
            language: 'en',
          },
        },
      ],
    },
  };
  var bookList = {
      booklist: [],
    };
  const response = request(app)
  app.get('/getBooks', function (req, res) {
      getBooks();
      books = resp.data.items;
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
        }
  }
  expect(bookList.booklist).toEqual(resp.data.items);
});