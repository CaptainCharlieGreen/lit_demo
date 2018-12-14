function getBooks () {
  return apiGet('books')
    .then(render);
}

function render (books) {
  return ReactDOM.render((new Books(null,books)).render(),
    document.getElementById('books'));
}

function addBook (title, author) {
  postData('books', {
    name: title,
    author: author
  })
  .then(getBooks);
}

getBooks();

function renderBook (book, id) {
  return <div key={id} className={`book ${book.sale ? 'book-sale': ""}`}>
    {book.name}
    <p>
      By {book.author}
    </p>
  </div>
}


class Books extends React.Component {
  constructor(props, books) {
    super(props);
    this.state = {
      newTitle: "",
      newAuthor: "",
      books: books
    };

    this.addBook = this.addBook.bind(this);
  }

  addBook() {
    addBook(this.state.newTitle.value, this.state.newAuthor.value);
  }

  render() {
    return (
      <div>
        <h3>Books</h3>
        <div>
          { (this.state.books || []).map(renderBook) }
        </div>
        <p>Add a book:</p>
        title: <input type="text"
                      ref={input => this.state.newTitle = input}></input>
        author: <input type="text"
                       ref={input => this.state.newAuthor = input}></input>
        <button onClick={this.addBook}>add</button>
      </div>
      );
  }
}
