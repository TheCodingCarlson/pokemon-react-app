import React, {Component} from 'react';
import './styles/PokemonFilter.less';

class PokemonFilter extends Component {
  handleChange = (event) => {
    console.log(event.currentTarget.value);
    this.props.filterPokemon(event.currentTarget.value);
  }

  render() {
    return (
      <div className="pokemon-filter">
        <p>Search for Pokemon!</p>
        <p>ex: Charizard</p>
        <input value={this.props.filter} onChange={(e) => this.handleChange(e)} />
      </div>
    );
  }
}

export default PokemonFilter;