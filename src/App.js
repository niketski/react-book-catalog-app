import React from 'react';
import './App.css';

import Header from './components/header/Header';
import BooksTable from './components/booksTable/BooksTable';
import BooksPanel from './components/booksPanel/BooksPanel';
import AddBookModal from './components/addBookModal/AddBookModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addBookModalIsActive: false
    };
    this.showAddBookModal = this.showAddBookModal.bind(this);
    this.hideAddBookModal = this.hideAddBookModal.bind(this);
    this.addBookSubmit    = this.addBookSubmit.bind(this);
  }

  showAddBookModal() {
    this.setState({ addBookModalIsActive: true });
  }

  hideAddBookModal() {
    this.setState({ addBookModalIsActive: false });
  }

  addBookSubmit(book) {

    console.log(book);
    console.log('submtted');

  }

  render() {
    const { addBookModalIsActive } = this.state;
    return (
      <React.Fragment>
        <Header/>

        {/* modals */}

        { addBookModalIsActive ?  <AddBookModal onSubmit={this.addBookSubmit} onClose={this.hideAddBookModal} /> : null}

        <main>
          <BooksPanel addBookModalShowHandler={this.showAddBookModal} />
          <BooksTable/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
