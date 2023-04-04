import React, { useState } from 'react';
import './SignUpForm.css';

function SignUpForm () {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ user_name: userName, password: password });
  };

  return (
    <div className="signup-container">
    <div className="signup-form-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-input-group">
          <label className="signup-label">User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  </div>
  );
};

export default SignUpForm;
