import React from 'react';
import CoronaFiles from '../Projects/CoronaFiles/CoronaFiles';
import RideDiaries from '../Projects/RideDiaries/RideDiaries';
import './ProjectsStyles.scss'

const Projects = () => {
  return (
    <div id='ProjectsPage'>
      <RideDiaries />
      <CoronaFiles />
    </div>
  );
};

export default Projects;
