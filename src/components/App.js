import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Pokedex from './Pokedex';
import Search from './Search';
import Team from './Team';
import Navbar from './Navbar';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Pokedex} />
          <Route path='/search' component={Search} />
          <Route path='/team' component={Team} />
          <Route path='/details/:name' component={PokemonDetails} />
        </div>
      </Router>
    </div>
  );
}

export default App;
