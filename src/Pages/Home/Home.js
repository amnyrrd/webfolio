import React from 'react';
import SideNavBar from '../../Components/SideNavBar/SideNavBar';
import PhotoCard from '../../Components/PhotoCard/PhotoCard';
import './HomeStyles.scss';

const Home = () => {
  return (
    <div id='home'>
      <SideNavBar id='sideNavBar' />
      <PhotoCard id='photoCard' />
    </div>
  );
};

export default Home;
