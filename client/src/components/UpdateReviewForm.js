import React, { useState } from "react";

function UpdateReviewForm({ onUpdateReview, review, reviewKey }) {
  const [score, setScore] = useState(review.score);
  const [comment, setComment] = useState(review.comment);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting updated review...");
    fetch(`/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: review.username,
        score: score,
        comment: comment,
        movie_id: review.movie_id,
        user_id: review.user_id,
      }),
    })
      .then((r) => r.json())
      .then((updatedReview) => {
        console.log(updatedReview);
        onUpdateReview(updatedReview);
      });
  }

  return (
    <form key={reviewKey} className="update-review" onSubmit={handleSubmit}>
      <input
        className="input"
        type="number"
        name="score"
        placeholder="score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <input
        className="input"
        type="text"
        name="comment"
        placeholder="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="input" type="submit">
        Update
      </button>
    </form>
  );
}

export default UpdateReviewForm;
