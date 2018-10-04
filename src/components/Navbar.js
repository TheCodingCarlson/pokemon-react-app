import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import pokeball from '../img/pokeball.png';

function Navbar() {
  return (
    <ul className="nav-links">
      <li>
        <Link to={'/'} className="brand">
          <img src={pokeball} alt="" />
        </Link>
      </li>
      <li><Link to={'/'} className="nav-link">Pokedex</Link></li>
      <li><Link to={'/search'} className="nav-link">Search</Link></li>
      <li><Link to={'/team'} className="nav-link">Team</Link></li>
    </ul>
  );
}

export default Navbar;