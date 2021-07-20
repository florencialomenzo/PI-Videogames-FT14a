import './App.css';
import LandingPage from './Components/LandingPage/index.js';
import { Route } from "react-router-dom";
import React from 'react';
import ShowVideogames from './Components/Videogames/index.jsx';
import Buscador  from './Components/NavBar/index';
import VideogameDetail from './Components/VideogameDetail';
import Nav from './Components/Nav/index';
import VideogamesFounded from './Components/VideogamesFounded';

function App() {
  return (
    <div>
      <React.Fragment>
          <Route exact path="/" component={LandingPage} />
          <Route path="/" component={Nav} />
          <Route path="/home" component={Buscador} />
          <Route path="/home/founded/:name" component={VideogamesFounded} />
          <Route exact path="/home" component={ShowVideogames} />
          <Route exact path="/home/:id" component={VideogameDetail} />
      </React.Fragment>
    </div>
  );
}

export default App;
