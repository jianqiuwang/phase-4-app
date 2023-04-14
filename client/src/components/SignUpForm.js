import React, { useState } from 'react';
import './SignUpForm.css';

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);

  function getCSRFToken() {
    const metaTag = document.querySelector('meta[name="csrf-token"]');
    return metaTag ? metaTag.getAttribute('content') : '';
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': getCSRFToken(),
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => {
          onLogin(user);
          setAccountCreated(true);
          });
        } else {
          response.json().then((data) => {
            alert(`Error: ${data.message}`);
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
      {accountCreated ? (
        <p className="success-message">
          Account successfully created! You can now log in.
        </p>
      ) : (
        <>
        <div className="signup-form-wrapper">
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-input-group">
            <label className="signup-label">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signup-input"
            />
          </div>
          <div className="signup-input-group">
            <label className="signup-label">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-input"
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        </div>
        </>
        )}
      </div>
    </div>
      
  );
}

export default SignUpForm;
