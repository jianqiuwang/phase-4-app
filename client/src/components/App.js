import React, { useState, useEffect } from 'react';
import { BrowserRouter,Route, Switch, useHistory } from "react-router-dom";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Movies from './Movies';
import Navbar from './Navbar';
import UserContext from '../context/user';


function App() {

  const [user, setUser] = useState(null);
  const handleLogoutClick = () => {
    fetch('http://localhost:3000/logout', { method: 'DELETE',credentials: 'include' }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  };

  // useEffect(() => {
  //   // auto-login
  //   fetch("http://localhost:3000/me", { credentials: 'include' }).then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  useEffect(() => {
    // Fetch the current user's information
    fetch("/me")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Not logged in");
      })
      .then((user) => {
        // Set the user state with the fetched user information
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <UserContext.Provider value={user}>
    <BrowserRouter>
      <Navbar onLogout={handleLogoutClick} user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <Movies/>
        </Route>
        <Route path="/signup">
          <SignUpForm onLogin={setUser} />
        </Route>
        <Route path="/login">
          <LoginForm onLogin={setUser} />
        </Route>
      </Switch>
    </BrowserRouter>
    </UserContext.Provider>
  );
  
};

export default App;
