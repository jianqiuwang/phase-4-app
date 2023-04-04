import React from "react";
import Search from "./Search";
import './Header.css';

function Header({onSearch}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
        🎬 
        </span>
        MovieJoy
      </h1>
      <Search onSearch={onSearch}/>
    </header>
  );
}

export default Header;