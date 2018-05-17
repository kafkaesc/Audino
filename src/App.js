import React, { Component } from 'react';
import './App.css';
import Audino from './components/Audino/Audino';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.png" className="Audino-logo" alt="logo" />
          <h1 className="App-title">Audino</h1>
        </header>
        <Audino />
      </div>
    );
  }
}

export default App;
