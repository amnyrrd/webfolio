import React from 'react';
import CoronaFiles from '../Projects/CoronaFiles/CoronaFiles';
import RideDiaries from '../Projects/RideDiaries/RideDiaries';
import './ProjectsStyles.scss';
import Footer from '../../Components/Footer/Footer';

const Projects = () => {
  return (
    <div id='ProjectsPage'>
      <RideDiaries />
      <CoronaFiles />
      <Footer />
    </div>
  );
};

export default Projects;
