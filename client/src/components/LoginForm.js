import React, { useState } from 'react';
import './LoginForm.css';
import { useHistory } from 'react-router-dom';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }else{
          return response.json().then((json)=>{
            throw new Error(json.errors.join(", "));
          })
        }
      })
      .then((user) => {
        if (user) {
          // Call the onLogin function passed as a prop from App.js
          onLogin(user);
          // Redirect to the main page
          history.push("/");
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleSignUpClick = () => {
    history.push('/signup');
  };

  return (
    <div className="login-container">
       {errorMessage && (
        <div className="error-message">
          {errorMessage}
        </div>
      )}
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label>User Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <button onClick={handleSignUpClick} className="signup-button">
        Don't have an account? Sign up
      </button>
    </div>
  );
};

export default LoginForm;

