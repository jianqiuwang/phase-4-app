import React from 'react';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Movies from './Movies';
import Navbar from './Navbar';

function App() {
  
  return (
    <BrowserRouter>
     <Navbar />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
