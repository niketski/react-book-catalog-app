import React from 'react';
import './App.css';

import Header from './components/header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          
        </main>
      </React.Fragment>
    );
  }
}

export default App;
