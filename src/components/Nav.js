import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ onSearch }) => {

  const clickedItem = (e) => {
    e.preventDefault();
    onSearch(e.target.textContent);
  }

  return(
    <nav className="main-nav">
      <ul>
        <li onClick={clickedItem}><NavLink to='/cats'>Cats</NavLink></li>
        <li onClick={clickedItem}><NavLink to='/dogs'>Dogs</NavLink></li>
        <li onClick={clickedItem}><NavLink to='/computers'>Computers</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav