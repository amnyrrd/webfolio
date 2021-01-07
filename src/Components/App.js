import React from 'react';
import '../App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Bio from '../Pages/Bio/Bio';
import Contact from '../Pages/Contact/Contact';
import Projects from '../Pages/Projects/Projects';
import BikeHome from '../Pages/BikeHome/BikeHome'
import CoronaFiles from '../Pages/Projects/CoronaFiles/CoronaFiles';
import RideDiaries from '../Pages/Projects/RideDiaries/RideDiaries';


const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/bio' render={() => <Bio />} />
        <Route exact path='/projects' render={() => <Projects />} />
        <Route exact path='/coronafiles' render={() => <CoronaFiles />} />
        <Route exact path='/ridediaries' render={() => <RideDiaries />} />
        <Route exact path='/contact' render={() => <Contact />} />
        <Route exact path='/bike' render={() => <BikeHome />} />
      </Switch>
    </HashRouter>
  );
};

export default App; 
