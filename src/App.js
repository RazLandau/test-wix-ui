import React from 'react';
import Button from 'wix-style-react/Button';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Button onClick={() => console.log('thanks for clicking :)')}>
            Click me!
        </Button>
    </div>
  );
}

export default App;
