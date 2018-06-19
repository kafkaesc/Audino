import React, { Component } from 'react';
import './App.css';
import SunSimulator from '../SunSimulator/SunSimulator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="logo.png" className="Audino-logo" alt="logo" />
          <h1 className="App-title">SunSimulator 2018</h1>
        </header>
        <SunSimulator />
      </div>
    );
  }
}

export default App;
