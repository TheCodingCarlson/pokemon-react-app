import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Pokedex} />
          <Route path='/details/:name' component={PokemonDetails} />
        </div>
      </Router>
    </div>
  );
}

export default App;
