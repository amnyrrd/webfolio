import React from 'react';
import Photo from '../../Public/Images/it-me.jpeg';
import './PhotoCardStyles.scss';

const PhotoCard = () => {
  return (
    <div id='PhotoCard'>
      <img src={Photo} alt='PhotoOfAaron' id='PhotoOfMe' />
      <div className='text-block'>
        <p className='HiBox'>Hi! I'm Aaron. Equal parts software developer and bike nerd.</p>
      </div>
    </div>
  );
};

export default PhotoCard;
