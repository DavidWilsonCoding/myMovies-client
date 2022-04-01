import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
  render() {
    //onMovieClick and movieData passed from main-view.jsx
    const { movieData, onMovieClick } = this.props;
    //add onClick event listener for each item of movieData to be returned, return contents of div (will change value of selectedMovie and component state in main-view.jsx)
    return <div className="movie-card" onClick={() => { onMovieClick(movieData); }}>
      {movieData.Title}
    </div>;
  }
}

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired
    }),
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};