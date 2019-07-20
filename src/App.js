import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = 'Welcome to react'

class App extends Component {
  

    state = {
      toggle: true
    }
    toggle = () =>{
      this.setState({
        toggle:!this.state.toggle
      })
    }
    
    render(){
    
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
        </a>
        <button onClick={this.toggle}>CLick me </button>
        {this.state.toggle?
           <p>Show and Hide this</p>:<p></p>}
          
          Learn React
          
        </header>
      </div>
    );
  }
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
