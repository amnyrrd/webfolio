import React from 'react';
import CFPhoto from '../../../Public/Images/TheRona-sized.png';
import './CoronaFilesStyles.scss';

const CoronaFiles = () => {
  return (
    <div id='CFCardAndTitle'>
      <a href='https://coronafiles.herokuapp.com/' target="_blank" rel="noreferrer" id='CFTitle'>
        CoronaFiles
      </a>
      <div id='CFCard'>
        <p id='CFWriteUp' className='CFPhotoAndWriteUp'>
          Corona Files is a tool designed to attempt to fight the spread of
          misinformation related to Covid-19. It is built with a React front-end
          with Ruby on Rails on the back-end. Users are able to add news they
          find relevant to the issue, and users can then vote on the
          article/link either 'True' or 'False'. The GoogleMaps API is used to
          filter items by location, although it is currently set up to only work on my IP address for maxiumum API key protection.
        </p>
        <br />
        <a href='https://coronafiles.herokuapp.com' target="_blank" rel="noreferrer"> 
        <img src={CFPhoto} alt='CoronaFilesPagePhoto' id='CFPhoto' /></a>
      </div>
    </div>
  );
};

export default CoronaFiles;
