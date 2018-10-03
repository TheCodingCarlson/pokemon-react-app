import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Pokedex from './Pokedex';
import Search from './Search';
import Team from './Team';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path='/' component={Pokedex} />
          <Route path='/search' component={Search} />
          <Route path='/team' component={Team} />
        </div>
      </Router>
    </div>
  );
}

export default App;
