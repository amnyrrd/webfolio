import React from 'react';
import Footer from '../../Components/Footer/Footer';
import './BioStyles.scss';

const Bio = () => {
  return (
    <>
      <div id='BioPageBG'>
        <div id='BioCard'>
          <h1 id='BioTitle'>Web Development</h1>
          <p id='BioText'>
            A capable and detailed Junior Software Developer, familiar with
            object-oriented programming, data structures, and algorithms.
            Completed Flatiron School's Software Engineering program in San
            Francisco in 2020. Proficient in problem solving and eager to expand
            my capabilities. Looking to join a progressive tech company to use
            tested JavaScript and Ruby on Rails skills, as well as any new skills
            and technologies needed.{' '}
          </p>
        </div>
        <div id='SkillsCard'>
          <h1 className='SkillsTitle'>Languages, </h1>
          <h1 className='SkillsTitle'>Frameworks and Skills</h1>
          <ul id='SkillsList'>
            <li>JavaScript (React, Redux, Node.js, TypeScript)</li>
            <li>Ruby on Rails</li>
            <li>Python</li>
            <li>Git/Github</li>
            <li>SQL (MySQL, PostgreSQL, SQLite)</li> <li>HTML5/CSS3/SASS</li>
            <li>Algorithms/Data Structures</li> <li>Heroku, Netlify and Firebase</li>{' '}
          </ul>
        </div>
        <div id='WorkCard'>
          <h1 id='WorkTitle'>Cycling</h1>
          <p id='WorkText'>Prior to beginning my programming journey, I worked in the cycling industry.  Most recently I was the Bike Fitter and Sales Manager at Trek in Berkeley, California from 2017 to the beginning of 2020.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bio;
