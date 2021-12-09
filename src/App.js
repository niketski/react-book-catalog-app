import React from 'react';
import './App.css';
import { books } from './initial-books-data.json';
import { v4 as uuidV4 } from 'uuid';
import BooksStorage from './utils/BooksStorage';
import BookContextProvider from './context/BookContext';
import ModalContextProvider from './context/ModalContext';
import FirebaseDb from './utils/firebase';

import Header from './components/header/Header';
import BooksTable from './components/booksTable/BooksTable';
import BooksPanel from './components/booksPanel/BooksPanel';
import AddBookModal from './components/addBookModal/AddBookModal';
import EditBookModal from './components/editBookModal/EditBookModal';

const firebaseDb = new FirebaseDb;
const storage = new BooksStorage();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      addBookModalIsActive: false,
      editBookModalIsActive: false,
      currentBook: null,
      searchValue: '',
      books: [],
    };
    this.showAddBookModal         = this.showAddBookModal.bind(this);
    this.hideAddBookModal         = this.hideAddBookModal.bind(this);
    this.showEditBookModal        = this.showEditBookModal.bind(this);
    this.hideEditBookModal        = this.hideEditBookModal.bind(this);
  }

  showAddBookModal() {
    this.setState({ addBookModalIsActive: true });
  }

  hideAddBookModal() {
    this.setState({ addBookModalIsActive: false });
  }

  showEditBookModal(book) {
    this.setState({ currentBook: book });
  }

  hideEditBookModal() {
    this.setState({ editBookModalIsActive: false });
  }

  render() {
    let { 
        addBookModalIsActive, 
        editBookModalIsActive, 
        currentBook } = this.state;

    return (
      <React.Fragment>
        <BookContextProvider>
          <ModalContextProvider>
            <Header/>

            {/* modals */}

            { editBookModalIsActive ? <EditBookModal onClose={this.hideEditBookModal} book={currentBook}/> : null }

            {/* end modals */}

            <main>
              <BooksPanel onChangeHandler={this.searchInputChangeHandler} addBookModalShowHandler={this.showAddBookModal} />
              <BooksTable/>
            </main>
          </ModalContextProvider>
        </BookContextProvider>
      </React.Fragment>
    );
  }
}

export default App;
