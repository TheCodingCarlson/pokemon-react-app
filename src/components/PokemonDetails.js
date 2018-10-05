import React, {Component} from 'react';
import './styles/PokemonDetails.less';
import helpers from '../helpers';

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: {},
      speciesData: {},
      isBack: false
    };
  }

  getData = () => {
    const url = this.props.location.state.pokemon.url;
    let pokemon = {};
    fetch(url, {
      method: "GET"
    }).then(response => {
      return response.json();
    }).then(pokemonData => {
      let order = pokemonData.order;
      pokemon = pokemonData;
      return fetch(`https://pokeapi.co/api/v2/pokemon-species/${order}/`)
    }).then(speciesData => {
      speciesData.json().then(species => {
        this.setState({
          pokemonData: pokemon,
          speciesData: species
        })
      })
    }).catch(error => console.log(error))
  }

  componentDidMount = () => {
    this.getData();
  }

  render() {
    const { name, height, weight, base_experience, abilities, stats, moves, types } = this.state.pokemonData;
    const { color } = this.state.speciesData;
    const colorName = color ? color.name : '';
    const styles = {
      color: colorName
    }
    const image = helpers.checkImageSprite(name); 
    return (
      <div className="pokemon-details">
        <img src={image ? `http://pokestadium.com/sprites/xy/${image}.gif/` : ''} alt={name} />
        <h1>{name}</h1>
        <p>Height: {height}ft</p>
        <p>Weight: {weight}lbs</p>
        <p>Base Exp: {base_experience}</p>
        <p>Abilities:</p>
        <p style={styles}>Color: {colorName}</p>
        <ul>
          {abilities && abilities.length > 0 && abilities.map(ability => {
            let abilityName = ability.ability.name;
            return <li key={abilityName}>{abilityName}</li>
          })}
        </ul>
        <p>Stats:</p>
        <ul>
          {stats && stats.length > 0 && stats.map(stat => {
            let statName = stat.stat.name;
            let statFigure = stat.base_stat;
            return <li key={statName}>{statName} - {statFigure}</li>
          })}
        </ul>
        <p>Types:</p>
        <ul>
          {types && types.length > 0 && types.map(type => {
            let typeName = type.type.name;
            return <li key={typeName}>{typeName}</li>
          })}
        </ul>
        <p>Moves:</p>
        <ul>
          {moves && moves.length > 0 && moves.map(move => {
            let moveName = move.move.name;
            return <li key={moveName}>{moveName}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default PokemonDetails;