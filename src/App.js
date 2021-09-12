import React from 'react';
import './App.css';

import Header from './components/header/Header';
import BooksTable from './components/booksTable/BooksTable';
import BooksPanel from './components/booksPanel/BooksPanel';
import Modal from './components/ui/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>

        {/* modals */}
        <Modal title="Add Book">
          <p>Hello world</p>
        </Modal>

        <main>
          <BooksPanel/>
          <BooksTable/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
