import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  onSearch : PropTypes.func.isRequired
}

export default Header