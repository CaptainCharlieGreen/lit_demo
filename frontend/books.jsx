function getBooks () {
  apiGet('books')
    .then(books => ReactDOM.render(renderBooks(books),
      document.getElementById('books')));
}

getBooks();

function renderBooks (books) {
  return (
    <div>
      <h3>Books</h3>
      <div>
        {
          books.map((book, id) =>
            <div key={id}>
              {book.name}
              <p>
                By {book.author}
              </p>
            </div>
          )
        }
      </div>  
    </div>
    );
}
