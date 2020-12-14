import React from 'react';
import RDPhoto from '../../../Public/Images/RideDiaries.png';
import './RideDiariesStyles.scss';

const RideDiaries = () => {
  return (
    <div id='RDCardAndTitle'>
      <a href='https://ridediaries.herokuapp.com/' id='RDTitle'>
        RideDiaries
      </a>
      <div id='RDCard'>
        <a href='https://ridediaries.herokuapp.com'>
          <img src={RDPhoto} alt='CoronaFilesPagePhoto' id='RDPhoto' />
        </a>
        <p id='RDWriteUp'>
          RideDiaries is a blogging platform specifically for cyclists built
          using a React front-end and Ruby on Rails on the back-end. Users
          create their blogposts using the Markdown based text editor Showdown.
          JSON Web Tokens are utilized for authentication. Click the photo or
          title above for a link to the project hosted on Heroku.
        </p>
      </div>
    </div>
  );
};

export default RideDiaries;
