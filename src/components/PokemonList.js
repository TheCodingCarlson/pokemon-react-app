import React, {Component} from 'react';
import PokemonCell from './PokemonCell';
import './styles/PokemonList.less';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }

  getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/", {
      method: "GET"
    }).then(response => {
      if (response.ok) {
        response.json().then(json => {
          console.log(json.results[0].name);
          this.setState({
            pokemon: json.results.slice(0, 12)
          });
        });
      }
    });
  }

  componentDidMount() {
    this.getPokemon();
  }

  render() {
    return (
      <div className="pokemon-list">
        {this.state.pokemon.map((pokemon) => {
          return <PokemonCell pokemon={pokemon} key={pokemon.name} />
        })}
      </div>
    );
  }
}

export default PokemonList;