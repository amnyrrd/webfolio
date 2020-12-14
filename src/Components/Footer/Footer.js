import React from 'react';
import { Link } from 'react-router-dom';
import Bike from '../../Public/Images/cycle.svg';
import './FooterStyles.scss';

const Footer = () => {
  switch (window.location.pathname) {
    case '/bike':
      return <BikePageFooter />;
    case '/bio':
      return <BioPageFooter />;
    case '/contact':
      return <ContactPageFooter />;
    case '/projects':
      return <ProjectsPageFooter />;
    default:
      return;
  }
};

const ContactPageFooter = () => (
  <div id='Footer' style={{ backgroundColor: '#C9FFE5' }}>
    <Link to='/' style={{ textDecoration: 'none' }}>
      <p id='HomeLink'>aaronminyard.com</p>
    </Link>
    <Link to='bio' style={{ textDecoration: 'none' }}>
      <p id='BioLink'>About Me</p>
    </Link>
    <Link to='projects' style={{ textDecoration: 'none' }}>
      <p id='ProjectsLink'>Projects</p>
    </Link>
    <Link to='bike'>
      <img src={Bike} alt='BicycleIcon' id='BikeIconFooter' />
    </Link>
  </div>
);

const BioPageFooter = () => (
  <div id='Footer' style={{ backgroundColor: '#C9FFE5' }}>
    <Link to='' style={{ textDecoration: 'none' }}>
      <p id='HomeLink'>aaronminyard.com</p>
    </Link>
    <Link to='projects' style={{ textDecoration: 'none' }}>
      <p id='ProjectsLink'>Projects</p>
    </Link>
    <Link to='contact' style={{ textDecoration: 'none' }}>
      <p id='ContactLink'>Contact</p>
    </Link>
    <Link to='bike'>
      <img src={Bike} alt='BicycleIcon' id='BikeIconFooter' />
    </Link>
  </div>
);

const ProjectsPageFooter = () => (
  <div id='Footer' style={{ backgroundColor: '#C4FFFE'}}>
    <Link to='' style={{ textDecoration: 'none' }}>
      <p id='HomeLink'>aaronminyard.com</p>
    </Link>
    <Link to='bio' style={{ textDecoration: 'none' }}>
      <p id='BioLink'>About Me</p>
    </Link>
    <Link to='contact' style={{ textDecoration: 'none' }}>
      <p id='ContactLink'>Contact</p>
    </Link>
    <Link to='bike'>
      <img src={Bike} alt='BicycleIcon' id='BikeIconFooter' />
    </Link>
  </div>
);

const BikePageFooter = () => (
  <div id='Footer'>
    <Link to='' style={{ textDecoration: 'none' }}>
      <p id='HomeLink'>aaronminyard.com</p>
    </Link>
    <Link to='projects' style={{ textDecoration: 'none' }}>
      <p id='ProjectsLink'>Projects</p>
    </Link>
    <Link to='bio' style={{ textDecoration: 'none' }}>
      <p id='BioLink'>About Me</p>
    </Link>
    <Link to='contact' style={{ textDecoration: 'none' }}>
      <p id='ContactLink'>Contact</p>
    </Link>
  </div>
);

export default Footer;
