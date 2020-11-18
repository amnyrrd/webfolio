import React from 'react';
import Photo from '../../Public/Images/dasme.jpeg';
import './PhotoCardStyles.scss';

const PhotoCard = () => {
  return (
    <div id='photoCard'>
      <img src={Photo} alt='photoOfAaron' id='photoOfMe' />
    </div>
  );
};

export default PhotoCard;
