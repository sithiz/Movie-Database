import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movies'


class App extends Component {
  
  state = {
    movies: []
  }


  async componentDidMount() {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=781674e84a7d724f1d2e983e4145a48b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movieData = await response.json();
      console.log(movieData)
      this.setState({
        movies: movieData.results
      })

    } catch(error){
      console.log(error.stack);
    }
  }

    render(){
    
      return (
      <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.state.movies.map( movie=> <Movie key={movie.id} movie={movie} />)}
        </header>
      </div>
    );
  }
}


export default App;
