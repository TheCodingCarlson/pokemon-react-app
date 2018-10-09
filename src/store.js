import { createStore } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { BrowserHistory } from 'react-router-dom';

// import the root reducer
import rootReducer from './reducers/index';

const pokemonAPiUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonData = () => {
  fetch(pokemonAPiUrl)
    .then(response => response.json()
      .then(data => this.setState({
        pokemon: data.results.slice(0, 450)
      })
    )
  )
}

// create an object for the default data
const defaultState = {
  pokemon: getPokemonData(),
  filterePokemon: [],
  filter: ''
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(BrowserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;