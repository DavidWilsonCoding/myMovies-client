import React from 'react';

export class MovieView extends React.Component {

  render() {
    //onBackClick and movieData passed from main-view.jsx
    const { movieData, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movieData.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movieData.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movieData.Description}</span>
        </div>
        {/*will change value of selectedMovie and component state in main-view.jsx)*/}
        <button onClick={() => { onBackClick(null); }}>Back</button>

      </div>
    );
  }
}