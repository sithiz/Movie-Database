import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = 'Welcome to react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. <Welcome />
        </p>
        <Welcome text={welcome}/>
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

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return(
      <h1 className='App-title'>{text}</h1>
    )
  }
}
export default App;
