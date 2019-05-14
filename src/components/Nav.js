import React from 'react';

const Nav = ({ onSearch }) => {

  const clickedItem = (e) => {
    e.preventDefault();
    onSearch(e.target.textContent);
  }

  return(
    <nav className="main-nav">
      <ul>
        <li onClick={clickedItem}><a href='/#'>Cats</a></li>
        <li onClick={clickedItem}><a href='/#'>Dogs</a></li>
        <li onClick={clickedItem}><a href='/#'>Computers</a></li>
      </ul>
    </nav>
  );
}

export default Nav