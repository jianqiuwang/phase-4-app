import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user, onLogout}) => {
    const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
  };
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" activeClassName="active" className="nav-link">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" activeClassName="active" className="nav-link">
            Sign Up
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/logout" className="nav-link logout-button" onClick={handleLogout}>
            Logout
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink 
          to={user ? "/add-movie" : ""}
          activeClassName="active"
          className="nav-link"
          onClick={() => {
            if (!user) {
            alert("Please login to create a new movie.");
            }
          }}
          >
             Add New Movie
        </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
