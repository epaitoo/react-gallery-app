import React from 'react';
import GalleryList from './GalleryList';
import NotFound from './NotFound'

const Gallery = ({ results, name, isLoading }) => {
  
  return(
    <div className="photo-container">
      <h2>{name}</h2>
      { //loading
        isLoading ? <p>LOADING...</p> 
        : <GalleryList results={results} />
      } 
      {
        //search Not found
        (results.length === 0) ? <NotFound />
        : <GalleryList results={results} />
      }
    </div>
  );
}

export default Gallery;