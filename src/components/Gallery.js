import React from 'react';
import Spinner from 'react-spinner-material';
import GalleryList from './GalleryList';


const Gallery = ({ results, name, loading }) => {
  
  return(
    <div className="photo-container">
      <h2>{name}</h2>
      { loading ? (<Spinner size={50} spinnerColor={"#B22222"} spinnerWidth={2} visible={true}  />)
        :  (<GalleryList results={results}/>) 
      }
    </div>
  );
}

export default Gallery;