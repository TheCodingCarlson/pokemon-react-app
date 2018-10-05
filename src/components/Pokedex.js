import React, {Component} from 'react';
import Header from './Header'
import PokemonList from './PokemonList';
import SearchInput from './SearchInput';

const pokemonAPiUrl = "https://pokeapi.co/api/v2/pokemon/";

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      filteredPokemon: [],
      filter: ''
    };
  }

  getPokemonData = () => {
    fetch(pokemonAPiUrl)
      .then(response => response.json()
        .then(data => this.setState({
          pokemon: data.results.slice(0, 450)
        })
      )
    )
  }

  filterPokemon = (newFilter) => {
    const filter = newFilter;
    const filteredPokemon = newFilter !== '' ? this.state.pokemon.filter(pokemon => pokemon.name.search(filter) !== -1) : [];
    this.setState({ filter, filteredPokemon });
  }

  componentDidMount = () => {
    this.getPokemonData();
  }

  render() {
    return (
      <div className="Pokedex">
        <Header text="Pokedex"/>
        <SearchInput filter={this.state.filter} filterPokemon={this.filterPokemon}/>
        {/* <RandomPokemon /> */}
        <PokemonList pokemon={this.state.filteredPokemon} />
      </div>
    );
  }
}

export default Pokedex;