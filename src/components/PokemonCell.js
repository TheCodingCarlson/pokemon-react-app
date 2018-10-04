import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PokemonCell.less';

function PokemonCell({pokemon}) {
  return (
    <Link to={`/details/${pokemon}`} className="pokemon-cell">
      <div>
        <img src={`http://pokestadium.com/sprites/xy/${pokemon}.gif/`} alt={pokemon} />
        <div className="align-bottom">
          <p>{pokemon}</p>
        </div>
      </div>
    </Link>
  );
}

export default PokemonCell;