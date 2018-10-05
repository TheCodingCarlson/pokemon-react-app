import React, {Component} from 'react';
import './styles/SearchInput.less';

class SearchInput extends Component {
  handleChange = (event) => {
    console.log(event.currentTarget.value);
    this.props.filterPokemon(event.currentTarget.value);
  }

  render() {
    return (
      <div className="pokemon-filter">
        <p>Search for Pokemon!</p>
        <p>ex: Charizard</p>
        <form className="search-form">
          <input value={this.props.filter} onChange={(e) => this.handleChange(e)} />
        </form>
      </div>
    );
  }
}

export default SearchInput;