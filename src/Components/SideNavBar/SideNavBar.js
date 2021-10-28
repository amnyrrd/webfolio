import React from 'react';
import { Link } from 'react-router-dom';
import ToggleBikeHome from '../ToggleHomeButton/ToggleHomeButton';
import './SideNavBarStyles.scss';
// import ''

const SideNavBar = () => {
  return (
    <div id='SideNavBar'>
      
      <Link to='/bio' id='BioLink'>
        About
      </Link>
      <br />
      <Link to='/projects' id='ProjectsLink'>
        Projects
      </Link>
      <br />
      <Link to='/contact' id='ContactLink'>
        Contact
      </Link>
      <ToggleBikeHome id='BikeIcon' />
    </div>
  );
};

export default SideNavBar;
