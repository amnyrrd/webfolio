import React from 'react';
import Footer from '../../Components/Footer/Footer';
import BikePhoto from '../../Public/Images/biking.jpg';
import BikeBlog from '../../Pages/BikeBlog/BikeBlog';
import './BikeHome.scss';

const BikeHome = () => {
  return (
    <>
      <div id='BikeHomeBG'>
        <img src={BikePhoto} id='BikePhoto' />
      <BikeBlog />
      </div>
      <Footer />
    </>
  );
};

export default BikeHome;
