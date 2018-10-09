import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Pokedex from './Pokedex';

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon,
    filteredPokemon: state.filteredPokemon,
    filter: state.filter
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Pokedex);

export default App;
