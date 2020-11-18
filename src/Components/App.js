import React from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Bio from '../Pages/Bio/Bio';
import Contact from '../Pages/Contact/Contact';
import Projects from '../Pages/Projects/Projects';
import CoronaFiles from '../Pages/Projects/CoronaFiles/CoronaFiles';
import RideDiaries from '../Pages/Projects/RideDiaries/RideDiaries';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/bio' render={() => <Bio />} />
        <Route exact path='/projects' render={() => <Projects />} />
        <Route exact path='/coronafiles' render={() => <CoronaFiles />} />
        <Route exact path='/ridediaries' render={() => <RideDiaries />} />
        <Route exact path='/contact' render={() => <Contact />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
