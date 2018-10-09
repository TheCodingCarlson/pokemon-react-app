import React from 'react';
import { render } from 'react-dom';
import './styles/index.less';

import * as serviceWorker from './serviceWorker';

import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App'
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Navbar />
      <Route path="/" component={App}>
        <Route component={Pokedex} />
        <Route path='/details/:name' component={PokemonDetails} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
