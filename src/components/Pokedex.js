import React from 'react';
import Header from './Header'
import PokemonList from './PokemonList';

function Pokedex() {
  return (
    <div className="Pokedex">
      <Header text="Pokedex"/>
      <PokemonList />
    </div>
  );
}

export default Pokedex;