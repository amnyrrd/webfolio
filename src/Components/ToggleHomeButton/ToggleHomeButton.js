import React from 'react';
import { Link } from 'react-router-dom';
import BikeIcon from '../../Public/Images/icons8-bicycle-100.png';
import './ToggleHomeButtonStyles.scss';

const ToggleHomeButton = () => {
  return (
    <div>
      <Link to='/bike'>
        <div id='BikeButton'>
          <img src={BikeIcon} alt='BicycleInCloudsIcon' id='BikeIcon' />
        </div>
      </Link>
    </div>
  );
};

export default ToggleHomeButton;
