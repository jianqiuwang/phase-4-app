import React, { useState } from 'react';
import './LoginForm.css';
import { useHistory } from 'react-router-dom';

 function LoginForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ user_name: username, password: password });
  };

  const handleSignUpClick = () => {
    history.push('/signup');
  };

  return (
    <div className="login-container">
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
