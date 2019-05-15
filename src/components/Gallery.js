import React from 'react';
import GalleryList from './GalleryList';
// import NotFound from './NotFound'

const Gallery = ({ results, name}) => {
  
  return(
    <div className="photo-container">
      <h2>{name}</h2>
      
      <GalleryList results={results} />
       
      {/* {
        //search Not found
        (results.length === 0) ? <NotFound />
        : <GalleryList results={results} />
      } */}
    </div>
  );
}

export default Gallery;