import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Footer from '../../Components/Footer/Footer';
import DevIcon from '../../Public/Images/dev.svg';
import OctoCat from '../../Public/Images/octocat.svg';
import StravaLogo from '../../Public/Images/Strava_Logo.svg';
import RWGPSLogo from '../../Public/Images/RWGPSLogo.png';
import './ContactStyles.scss';

const Contact = () => {
  return (
    <>
      <div id='ContactPage'>
        <div id='Header'>
          <h1>aaronminyard.com</h1>
          <div id='Icons'>
            <Link
              to={{ pathname: 'https://github.com/amnyrrd' }}
              target='_blank'>
              <img src={OctoCat} alt='OctoCatIcon' id='OctoCatIcon' />
            </Link>
            <Link to={{ pathname: 'https://dev.to/amnyrrd' }} target='_blank'>
              <img src={DevIcon} alt='DevToIcon' id='DevToIcon' />
            </Link>
            <Link
              to={{ pathname: 'https://ridewithgps.com/users/895185/' }}
              target='_blank'>
              <img src={RWGPSLogo} alt='RWGPSIcon' id='RWGPSIcon' />
            </Link>
            <Link
              to={{ pathname: 'https://www.strava.com/athletes/2958777' }}
              target='_blank'>
              <img src={StravaLogo} alt='StravaIcon' id='StravaIcon' />
            </Link>
            
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;

