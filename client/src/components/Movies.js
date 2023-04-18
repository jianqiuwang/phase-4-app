import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import './Movies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import UpdateReviewForm from './UpdateReviewForm';
import CreateReviewForm from './CreateReviewForm';

function Movies() {
  const user = useContext(UserContext);
  console.log(user)
  const [updatedMovies, setUpdatedMovies] = useState([]);
  const [search, setSearch]=useState("")
//   editingReviewId: This state variable is used to keep track of the review that is currently being edited by the user. When a user clicks to edit a review, the editingReviewId is set to the ID of that review. If no review is being edited, editingReviewId is set to null.
  const [editingReviewId, setEditingReviewId] = useState(null);
//   addingReviewMovieId: This state variable is used to keep track of the movie for which the user is currently adding a review. When a user clicks to add a review for a movie, the addingReviewMovieId is set to the ID of that movie. If no movie is being added a review for, addingReviewMovieId is set to null.
  const [addingReviewMovieId, setAddingReviewMovieId] = useState(null);
  useEffect(() => {
    fetch('/movies')
      .then((resp) => resp.json())
      .then((movies) => {
        const uniqueMoviesObj = {};
  
        movies.forEach((movie) => {
          uniqueMoviesObj[movie.id] = movie;
        });
  
        const uniqueMovies = Object.values(uniqueMoviesObj);
        setUpdatedMovies(uniqueMovies);
      });
  }, []);


  function handleAddReview(movie, newReview) {
    console.log('Submitting review:', newReview);
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newReview, movie_id: movie.id, user_id: user.id }),
    })
      .then((response) => response.json())
      .then((newReviewData) => {
        const updatedMoviesData = updatedMovies.map((m) => {
          if (m.id === movie.id) {
            return {
              ...movie,
              reviews: movie.reviews.concat(newReviewData),
            };
          }
          return m;
        });
        setUpdatedMovies(updatedMoviesData);
        setAddingReviewMovieId(null);
      });
  }
  
  
  const handleDelete = (movieId, reviewId) => {
    fetch(`/reviews/${reviewId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          // Remove the deleted review from the state
          const updatedMoviesData = updatedMovies.map((movie) => {
            if (movie.id === movieId) {
              return {
                ...movie,
                //updates the reviews property of the new movie object. It uses the filter() method to create a new array containing only the reviews that don't have the same ID as the deleted review (reviewId).
                reviews: movie.reviews.filter((review) => review.id !== reviewId),
              };
            }
            return movie;
          });
          setUpdatedMovies(updatedMoviesData);
        }
      });
  };


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
      console.log(reviewId);
      // Update the state with the new movies data
      setUpdatedMovies(updatedMoviesData);
  };

  const MoviesDisplay=updatedMovies.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()))

  function renderReview(movie, review) {
    // console.log(user)
    // console.log(review)
    return review.id === editingReviewId ? (
      <UpdateReviewForm
        review={review}
        onUpdateReview={(updatedReview) => {
          updateMovieReviews(movie, updatedReview);
          setEditingReviewId(null);
        }}
      />
    ) : (
      <>
        <p>
          <strong>{review.username}</strong> - {review.score}/10
        </p>
        <p>{review.comment}</p>
        <p>
          Likes: {review.likes}{" "}
          <button
            className="like-button"
            onClick={() => increaseLikes(movie.id, review.id)}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          {user && user.id === review.user_id && (
            <>
                <button onClick={() => handleDelete(movie.id, review.id)}>
                Delete
                </button>
                <button onClick={() => setEditingReviewId(review.id)}>
                Edit
                </button>
            </>
          )}
        </p>
      </>
    );
  }
  
  
  function updateMovieReviews(movie, updatedReview) {
    const updatedMoviesData = updatedMovies.map((m) => {
      if (m.id === movie.id) {
        return {
          ...movie,
          reviews: movie.reviews.filter((r) => r.id !== updatedReview.id).concat(updatedReview),
        };
      }
      return m;
    });
    console.log(updatedMoviesData);
    setUpdatedMovies(updatedMoviesData);
  }
  

  return (
    <div className="container">
      <Header onSearch={setSearch} />
      <div className="movies-list">
        {MoviesDisplay.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Price: ${movie.price}</p>
            <p>{movie.description}</p>
            <div className="reviews">
              <h3>Reviews</h3>
              {user && (
                addingReviewMovieId === movie.id ? (
                <CreateReviewForm
                movie={movie}
                onAddReview={(newReview) => handleAddReview(movie, newReview)}
                />
                ) : (
                <button onClick={() => setAddingReviewMovieId(movie.id)}>Add Review</button>
                )
                )}
              {movie.reviews.map((review) => {
                return (
                    <div key={review.id} className="review">
                    {renderReview(movie, review)}
                    </div>
                        );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Movies;
