import React from 'react';
import './App.css';

import Header from './components/header/Header';
import SearchBook from './components/searchBook/SearchBook';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <SearchBook/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
