import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App" id="background">
      <div className="Left-side">
        <div className="Menu Left">s
        
        </div>  
      </div>
      
        <header className="App-header">
          <div className="Menu">
            <button className="Menu-button"> Home </button>
            <button className="Menu-button"> About Us </button>
            <button className="Menu-button"> Contact </button>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
      </div>
    );
  }
}

export default App;
