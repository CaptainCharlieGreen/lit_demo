function getBooks () {
  return apiGet('books');
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
  .then(() => getBooks())
  .then(render);
}

getBooks().then(render);

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

    this.handleNewTitle = this.handleNewTitle.bind(this);
    this.handleNewAuthor = this.handleNewAuthor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  handleNewTitle(event) {
    this.state.newTitle = event.target.value;
    this.render();
  }

  handleNewAuthor(event) {
    this.state.newAuthor = event.target.value;
    this.render();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addBook();
  }

  addBook() {
    addBook(this.state.newTitle, this.state.newAuthor);
  }

  render() {
    return (
      <div>
        <h3>Books</h3>
        <div>
          {
            (this.state.books || []).map(renderBook)
          }
        </div>
        <p>Add a book:</p>
        title: <input type="text"
                      value={this.state.newTitle}
                      onChange={this.handleNewTitle}></input>
        author: <input type="text"
                       value={this.state.newAuthor}
                       onChange={this.handleNewAuthor}></input>
        <button onClick={this.addBook}>add</button>
      </div>
      );
  }
}
