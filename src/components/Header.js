import React from 'react';
import Search from './Search';
import Nav from './Nav';

const Header = ({ onSearch }) => {
  return(
    <div>
      <Search onSearch={onSearch}/>
      <Nav />
    </div> 
  );
}

export default Header