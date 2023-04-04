import React, { useState, useEffect } from 'react';
import './Movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

function Movies() {
  const [updatedMovies, setUpdatedMovies] = useState([]);
  const [search, setSearch]=useState("")

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((resp) => resp.json())
      .then((movies) => setUpdatedMovies(movies));
  }, []);

  const increaseLikes = (movieId, reviewId) => {
    const updatedMoviesData = updatedMovies.map((movie) => {
        if (movie.id === movieId) {
          return {
            ...movie,
            reviews: movie.reviews.map((review) => {
              if (review.id === reviewId) {
                return { ...review, likes: review.likes + 1 };
              }
              return review;
            }),
          };
        }
        return movie;
      });
      console.log(updatedMovies)
      // Update the state with the new movies data
      setUpdatedMovies(updatedMoviesData);
  };

  const MoviesDisplay=updatedMovies.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="container">
      <Header onSearch={setSearch}/>
      <div className="movies-list">
        {MoviesDisplay.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Price: ${movie.price}</p>
            <p>{movie.description}</p>
            <div className="reviews">
              <h3>Reviews</h3>
              {movie.reviews.map((review) => (
                <div key={review.id} className="review">
                  <p><strong>{review.user_name}</strong> - {review.score}/10</p>
                  <p>{review.comment}</p>
                  <p>
                    Likes: {review.likes}{' '}
                    <button className="like-button" onClick={() => increaseLikes(movie.id, review.id)}>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
