import React from 'react';
import './App.css';
import { books } from './initial-books-data.json';
import { v4 as uuidV4 } from 'uuid';

import Header from './components/header/Header';
import BooksTable from './components/booksTable/BooksTable';
import BooksPanel from './components/booksPanel/BooksPanel';
import AddBookModal from './components/addBookModal/AddBookModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addBookModalIsActive: false,
      books: []
    };
    this.showAddBookModal  = this.showAddBookModal.bind(this);
    this.hideAddBookModal  = this.hideAddBookModal.bind(this);
    this.addBookHandler    = this.addBookHandler.bind(this);
    this.deleteBookHandler = this.deleteBookHandler.bind(this);
  }

  showAddBookModal() {
    this.setState({ addBookModalIsActive: true });
  }

  hideAddBookModal() {
    this.setState({ addBookModalIsActive: false });
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

  // lifecycle methods
  componentDidMount() {
    console.log('mounted');

    this.setState({
      books: books
    });

    console.log(books);

  }

  render() {
    const { addBookModalIsActive, books } = this.state;

    return (
      <React.Fragment>
        <Header/>

        {/* modals */}

        { addBookModalIsActive ?  <AddBookModal onSubmit={this.addBookHandler} onClose={this.hideAddBookModal} /> : null}

        <main>
          <BooksPanel addBookModalShowHandler={this.showAddBookModal} />
          <BooksTable deleteBook={this.deleteBookHandler} books={books}/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
