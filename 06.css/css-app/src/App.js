import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import Area from './Area'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <Button size='big'></Button>
          <Button size='small'></Button>
          <Area size='big'></Area>
          <Area size='small'></Area>
        </div>

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

export default App;
