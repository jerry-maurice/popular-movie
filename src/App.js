import './App.css';
import React, {Component} from 'react';
import * as MovieAPI from './utils/MovieDBAPI';
import Layout from './movie/layout'

class App extends Component{
  state = {
    movies:[]
  }
  componentDidMount(){
    MovieAPI.getPopularMovies()
      .then((movies)=>{
        this.setState(()=>({
          movies
        }))
      })
  }
  render(){
    return (
      <Layout 
      movies={this.state.movies}/>
    )
  }
}

export default App;
