import React from 'react'
import NotFound from './NotFound'

const GalleryList = ({ results }) => {
  let images = results.map(photo => 
    <li key={photo.id}>
      <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title}/>
    </li>
  )

  return (
    <ul>
      { results.length > 0  ? images : <NotFound /> }
    </ul>
  );

}

export default GalleryList;