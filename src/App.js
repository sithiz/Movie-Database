import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movies'

const movies = [
  {
    id:1,
    title: 'Starwars',
    desc: 'A space movie'
  },
  {
    id:2,
    title: 'spider man'
  },
  {
    id:3,
    title:'the third movie'
  }
];

class App extends Component {
  

    render(){
    
      return (
      <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {movies.map( movie=> <Movie key={movie.id} movie={movie} desc={movie.desc}/>)}
        </header>
      </div>
    );
  }
}


export default App;
