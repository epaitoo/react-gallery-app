import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import NoResult from './NoResult';



const Gallery = ({results, name}) => {

  let images;
  results.length > 0
    ?
     (images = results.map(image => 
      <GalleryItem 
        url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
        alt={image.title}
        key={image.id} />
      )) : ( images = <NoResult />)
  
  return(
    <div className="photo-container">
      <h2>{ name }</h2>
      <ul>
        { images }
      </ul>
     
    </div>
  );
}

Gallery.propTypes = {
  name : PropTypes.string.isRequired, 
  images : PropTypes.arrayOf(PropTypes.object)
}

export default Gallery;