const Lit = require('lit');
const books = [
  {
    "name": "The Grapes of Wrath",
    "author": "John Steinbeck"
  },
  {
    "name": "War and Peace",
    "author": "Leo Tolstoy"
  },
  {
    "name": "The C Programming Language",
    "author": "Brian Kernighan and Dennis Ritchie"
  }
];

module.exports = function () {
  return Lit('Sales-getSales')()
    .then(sales => {
      const salesSet = new Set((sales || []));
      return Promise.resolve(books.map(book => {
        return {
          sale: salesSet.has(book.author),
          ...book
        };
      }))
    });
};
