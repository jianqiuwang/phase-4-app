import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NewMovieForm.css';

function NewMovieForm() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3000/movies", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        price: price,
        description: description,
        image: image,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
            // The throw statement allows you to create a custom error.
          throw new Error("Failed to add movie");
        }
      })
      .then(() => {
        history.push('/');
      })
    //   The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="add-movie-container">
      <div className="add-movie-form-container">
        <div className="add-movie-form-wrapper">
          <form onSubmit={handleSubmit} className="add-movie-form">
            <div className="add-movie-input-group">
              <label className="add-movie-label">Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="add-movie-input"
              />
            </div>
            <div className="add-movie-input-group">
              <label className="add-movie-label">Price:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="add-movie-input"
              />
            </div>
            <div className="add-movie-input-group">
              <label className="add-movie-label">Description:</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="add-movie-input"
              />
            </div>
            <div className="add-movie-input-group">
              <label className="add-movie-label">Image URL:</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="add-movie-input"
              />
            </div>
            <button type="submit" className="add-movie-button">
              Add Movie
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewMovieForm;
