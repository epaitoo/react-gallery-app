import React from 'react';
import { Link } from 'react-router-dom'

const PageNotFound = () => (
  <div>
    <h3>Page Not Found</h3>
    <Link to='/'>Return to Home</Link>
  </div>
);
  
export default PageNotFound