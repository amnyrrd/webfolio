import React from 'react';
import Photo from '../../Public/Images/dasme.jpeg';
import './PhotoCardStyles.scss';

const PhotoCard = () => {
  return (
    <div id='photoCard'>
      <img src={Photo} alt='photoOfAaron' id='photoOfMe' />
      <div class='text-block'>
        <p class='HiBox'>Hi! I'm Aaron. Equal parts software developer and bike nerd.</p>
      </div>
    </div>
  );
};

export default PhotoCard;
