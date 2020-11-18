import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavBarStyles.scss';
// import ''

const SideNavBar = () => {
  return (
    <div id='sideNavBar'>
      <Link to='/bio' id='bioLink'>
        About
      </Link>
      <br />
      <Link to='/projects' id='projectsLink'>
        Projects
      </Link>
      <br />
      <Link to='/contact' id='contactLink'>
        Contact
      </Link>
      <br />
    </div>
  );
};

export default SideNavBar;
