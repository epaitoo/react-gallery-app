import React from 'react';




const Gallery = ({ results }) => {
  
  let images = results.map(photo => 
    <li key={photo.id}>
      <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title}/>
    </li>
  )
  
  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {images}
      </ul>

      {/* Nav Components Routes */}
      
  </div>
  );
}

export default Gallery;