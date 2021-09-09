import React from 'react';
import './App.css';

import Header from './components/header/Header';
import BooksTable from './components/booksTable/BooksTable';
import BooksPanel from './components/BooksPanel/BooksPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <BooksPanel/>
          <BooksTable/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
