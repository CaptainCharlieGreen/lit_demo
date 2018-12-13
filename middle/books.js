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
  console.log('here')
  var x;
  try {
    x = Lit('Sales-getSales');  
  } catch (e) {
    console.log('there')
    console.log(e);
  }
  return x()
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
