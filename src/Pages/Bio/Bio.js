import React from 'react';
import Footer from '../../Components/Footer/Footer';
import './BioStyles.scss';

const Bio = () => {
  return (
    <>
      <div id='BioPageBG'>
        <div id='BioCard'>
          <h1 className='BioTitle'>Web Development</h1>
          <p id='BioText1'>
            A capable and detailed Early Career Full Stack Engineer, familiar
            with object-oriented programming, data structures, and algorithms.
            Completed Flatiron School's Software Engineering program in San
            Francisco in 2020. Adroit in problem solving and eager to expand my
            capabilities. Looking to join a progressive tech company to use
            tested JavaScript and Ruby on Rails skills, as well as new skills
            and technologies.{' '}
          </p>
          <div id='SkillsCard'>
            <h1 className='BioTitle'>Languages, Frameworks and Skills</h1>
            <ul id='SkillsList'>
              <li>JavaScript (React, Redux, Node.js, TypeScript)</li>
              <li>Ruby on Rails</li>
              <li>Python</li>
              <li>Git/Github</li>
              <li>SQL (MySQL, PostgreSQL, SQLite)</li> <li>HTML5/CSS3/SASS</li>
              <li>Algorithms and Data Structures</li> <li>Heroku</li>{' '}
              <li>Netlify</li> <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bio;
