import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PokemonCell.less';
import helpers from '../helpers';

function PokemonCell({pokemon}) {
  const { name } = pokemon;
  const image = helpers.checkImageSprite(name); 
  return (
    <Link to={{
        pathname: `/details/${name}`,
        state: {
          pokemon: pokemon
        }
      }} 
      className="pokemon-cell">
      <div>
        <img src={`http://pokestadium.com/sprites/xy/${image}.gif/`} alt={name} />
        <div className="align-bottom">
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
}

export default PokemonCell;