import React from 'react';
import './App.css';
import { books } from './initial-books-data.json';
import { v4 as uuidV4 } from 'uuid';

import Header from './components/header/Header';
import BooksTable from './components/booksTable/BooksTable';
import BooksPanel from './components/booksPanel/BooksPanel';
import AddBookModal from './components/addBookModal/AddBookModal';
import EditBookModal from './components/editBookModal/EditBookModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addBookModalIsActive: false,
      editBookModalIsActive: false,
      currentBook: null,
      books: []
    };
    this.showAddBookModal  = this.showAddBookModal.bind(this);
    this.hideAddBookModal  = this.hideAddBookModal.bind(this);
    this.addBookHandler    = this.addBookHandler.bind(this);
    this.deleteBookHandler = this.deleteBookHandler.bind(this);
    this.updateBook        = this.updateBook.bind(this);
    this.showEditBookModal = this.showEditBookModal.bind(this);
    this.hideEditBookModal = this.hideEditBookModal.bind(this);
  }

  showAddBookModal() {
    this.setState({ addBookModalIsActive: true });
  }

  hideAddBookModal() {
    this.setState({ addBookModalIsActive: false });
  }

  showEditBookModal(book) {
    console.log(book);
    this.setState({ currentBook: book, editBookModalIsActive: true });
  }

  hideEditBookModal() {
    this.setState({ editBookModalIsActive: false });
  }

  addBookHandler(book) {

    let updatedBooks = [...this.state.books];
    let newBook = {
      ...book,
      id: uuidV4()
    };

    updatedBooks.push(newBook);

    this.setState({
      books: updatedBooks
    });


    console.log('submtted');

  }

  deleteBookHandler(id) {
    
    const updatedBooks = [...this.state.books].filter(book => book.id != id);
 
    this.setState({
      books:  updatedBooks
    });

  
    console.log('delete');
  }

  updateBook(id, updatedBook) {
    const currentBooks = [...this.state.books];
    const updatedBooks = currentBooks.map(book => {
      
      if(id == book.id) return updatedBook;

      return book;

    });

    this.setState({
      books: updatedBooks
    });
    
    console.log('edit');
  }

  // lifecycle methods
  componentDidMount() {
    console.log('mounted');

    this.setState({
      books: books
    });

    console.log(books);

  }

  render() {
    const { addBookModalIsActive, books, editBookModalIsActive, currentBook } = this.state;

    return (
      <React.Fragment>
        <Header/>

        {/* modals */}

        { addBookModalIsActive ?  <AddBookModal onSubmit={this.addBookHandler} onClose={this.hideAddBookModal} /> : null}

        { editBookModalIsActive ? <EditBookModal onSubmit={this.updateBook} onClose={this.hideEditBookModal} book={currentBook}/> : null }

      {/* end modals */}

        <main>
          <BooksPanel addBookModalShowHandler={this.showAddBookModal} />
          <BooksTable editBookModalShowHandler={this.showEditBookModal} deleteBook={this.deleteBookHandler} books={books}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
