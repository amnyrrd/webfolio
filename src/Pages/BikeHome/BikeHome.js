import React from 'react';
import Footer from '../../Components/Footer/Footer';
import BikePhoto from '../../Public/Images/biking.jpg';
import BikeBlog from '../../Pages/BikeBlog/BikeBlog';
import './BikeHome.scss';

const BikeHome = () => {
  return (
    <>
      <div id='BikeHomeBG' alt='BikeHomeBG'>
        <div id='BikePhoto' alt='BikePhoto' style={{backgroundImage: `url(${BikePhoto})`}}>
          <iframe height='454' width='300' frameborder='0' allowtransparency='true' scrolling='yes' title='StravaWidget' id='StravaWidget' src='https://www.strava.com/athletes/2958777/latest-rides/04beeb52d5a548bb2fa93d7e469fa14fecf92b34'></iframe>
        </div>
          <BikeBlog />
      </div>
    <Footer />
  </>
  );
};

export default BikeHome;

// <img src={BikePhoto} id='BikePhoto' alt='BikePhoto' />
