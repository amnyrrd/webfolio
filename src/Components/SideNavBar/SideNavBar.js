import React from 'react';
import { Link } from 'react-router-dom';
import ToggleBikeHome from '../ToggleHomeButton/ToggleHomeButton';
import './SideNavBarStyles.scss';

const SideNavBar = () => {
  return (
    <div id='SideNavBar'>
      <Link to='/bio' id='BioLink' alt='BioLink'>
        About
      </Link>
      <br />
      <Link to='/projects' id='ProjectsLink' alt='ProjectsLink'>
        Projects
      </Link>
      <br />
      <Link to='/contact' id='ContactLink' alt='ContactLink'>
        Contact
      </Link>
      <ToggleBikeHome id='BikeIcon'  alt='BikeIcon' />
    </div>
  );
};

export default SideNavBar;
