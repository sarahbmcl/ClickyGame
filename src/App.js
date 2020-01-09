import React, { Component } from 'react';

import Board from './components/board/board';
import Header from './components/header/header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Board />
      </div>
    );
  }
}

export default App;
