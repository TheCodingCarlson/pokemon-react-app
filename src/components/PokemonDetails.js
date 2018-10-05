import React, {Component} from 'react';
import './styles/PokemonDetails.less';

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {}
    };
  }

  componentWillMount() {
    this.setState({
      pokemon: this.props.location.state.pokemon
    });
  }

  render() {
    return (
      <h1>{this.state.pokemon.name}</h1>
    )
  }
}

export default PokemonDetails;