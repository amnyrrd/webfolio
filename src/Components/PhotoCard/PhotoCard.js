import React from 'react';
import Photo from '../../Public/Images/it-me.jpeg';
import './PhotoCardStyles.scss';


const PhotoCard = () => {
  return (
    <div id='PhotoCard'>
    <p className='HiBox'>Hi! I'm Aaron. Equal parts web developer and bike nerd.</p>  
      <img src={Photo} alt='PhotoOfAaron' id='PhotoOfMe' />
    </div>
  );
};

export default PhotoCard;

