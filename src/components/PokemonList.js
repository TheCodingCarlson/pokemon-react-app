import React from 'react';
import PokemonCell from './PokemonCell';
import './styles/PokemonList.less';

const PokemonList = ({pokemon}) => {
  return (
    <div className="pokemon-list">
      {pokemon.map((pokemon) => {
        return <PokemonCell pokemon={pokemon} key={pokemon.name} />
      })}
    </div>
  );
}

export default PokemonList;