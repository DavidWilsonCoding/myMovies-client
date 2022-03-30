import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  //the first method to be executed in the component
  constructor(){
    super();
    //initializes movies array the inside this.state object
    this.state = {
      movies: [
        { _id: 1, Title: 'Grimsby', Description: 'Grimsby is a 2016 action comedy film directed by Louis Leterrier and written by Sacha Baron Cohen, Phil Johnston, and Peter Baynham.', ImagePath: 'https://m.media-amazon.com/images/M/MV5BMjE0NTE3MjMwNV5BMl5BanBnXkFtZTgwMDc5NjQxODE@._V1_.jpg'},
        { _id: 2, Title: 'Scent of a Woman', Description: 'Scent of a Woman is an American drama film produced and directed by Martin Brest that tells the story of a preparatory school student who takes a job as an assistant to an irritable, blind, medically retired Army lieutenant colonel.', ImagePath: 'https://m.media-amazon.com/images/M/MV5BZTM3ZjA3NTctZThkYy00ODYyLTk2ZjItZmE0MmZlMTk3YjQwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'},
        { _id: 3, Title: 'Ferris Bueller\'s Day Off', Description: 'A high school slacker pretends to be sick to skip school and have an exciting day off alongside his girlfriend and his best buddy through Chicago, while trying to outwit his obsessive school principal and his unconformited sister along the way. Ferris is a street-wise kid who knows all the tricks.', ImagePath: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg'}
      ],
      //selectedMovie is used to determine which view to display - when set to null, default main-view is displayed
      selectedMovie: null
    }
  }

  //function to be called when selectedMovie changes (on click event)
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;
  
    //return message if no movies are found
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    //return sub-components of MainView on click events
    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}

export default MainView;