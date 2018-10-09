import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import filter from './filter';
import filteredPokemon from './filteredPokemon';

const rootReducer = combineReducers({filter, filteredPokemon, routing: routerReducer });

export default rootReducer;