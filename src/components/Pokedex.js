import React, {Component} from 'react';
import Header from './Header'
import PokemonList from './PokemonList';
import PokemonFilter from './PokemonFilter';
import Button from './Button';

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

  getRandomPokemon = () => {
   const filteredPokemon = [];

   while (filteredPokemon.length < 4) {
     let pokemon = this.state.pokemon[Math.floor(Math.random() * this.state.pokemon.length)];
     filteredPokemon.push(pokemon);
   }

    this.setState({ filteredPokemon });
  }

  filterPokemon = (newFilter) => {
    const filter = newFilter;
    const filteredPokemon = newFilter !== '' 
      ? this.state.pokemon.filter(pokemon => 
        pokemon.name.search(filter.toLowerCase()) !== -1) 
      : [];

    this.setState({ filter, filteredPokemon });
  }

  componentDidMount = () => {
    this.getPokemonData();
  }

  render() {
    return (
      <div className="Pokedex">
        <Header text="Pokedex"/>
        <PokemonFilter filter={this.state.filter} filterPokemon={this.filterPokemon}/>
        <Button text="Randomize!" onClickFunction={() => this.getRandomPokemon()} />
        <PokemonList pokemon={this.state.filteredPokemon} />
      </div>
    );
  }
}

export default Pokedex;