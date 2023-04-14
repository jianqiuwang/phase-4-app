import React, { useState} from 'react';


function CreateReviewForm({ movie, onAddReview }) {
    const [newReview, setNewReview] = useState({ score: '', comment: '' });
   
    function handleSubmit(e) {
      e.preventDefault();
      onAddReview(newReview);
      setNewReview({ score: '', comment: '' });
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Score:
          <input
            type="number"
            min="1"
            max="10"
            value={newReview.score}
            onChange={(e) => setNewReview({ ...newReview, score: e.target.value })}
            required
          />
        </label>
        <label>
          Comment:
          <textarea
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            required
          />
        </label>
        <button type="submit">Add Review</button>
      </form>
    );
  }

  export default CreateReviewForm;