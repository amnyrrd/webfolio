import React from 'react';
import SideNavBar from '../../Components/SideNavBar/SideNavBar';
import PhotoCard from '../../Components/PhotoCard/PhotoCard';
import './HomeStyles.scss';

const Home = () => {
  return (
    <div id='Home'>
      <SideNavBar id='SideNavBar' />
      <PhotoCard id='PhotoCard' />
    </div>
  );
};

export default Home;
