import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
      </ul>
    </nav>
  );
};

export default Navbar;