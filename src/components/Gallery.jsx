import React from 'react';
// Context
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
// Components
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const data = useContext(DataContext)
  const display = data.map((item, i) => {
    return(
      <GalleryItem item={item} key={i} />
    )
  });
  return (
    <div>
      {display}
    </div>
  )
};
export default Gallery;