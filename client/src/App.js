import './App.css';
import LandingPage from './Components/LandingPage/index.js';
import { Route } from "react-router-dom";
import React from 'react';
import ShowVideogames from './Components/Videogames/index.jsx';
import Buscador  from './Components/Buscador/index';
import VideogameDetail from './Components/VideogameDetail';
import Nav from './Components/Nav/index';
import AddVideogame from './Components/AddVideogame/index';
import Filter from './Components/Filter/index';


function App() {
  return (
    <div>
      <React.Fragment>
          <Route exact path="/" component={LandingPage} />
          <Route path="/" component={Nav} />
          <Route exact path="/home" component={Buscador} />
          <Route exact path="/home" component={Filter} />
          <Route exact path="/home" component={ShowVideogames} />
          <Route exact path="/addvideogame" component={AddVideogame}/>
          <Route exact path="/home/:id" component={VideogameDetail} />
      </React.Fragment>
    </div>
  );
}

export default App;
