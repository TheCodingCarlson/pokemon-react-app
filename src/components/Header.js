import React from 'react';
import './styles/Header.css';

function Header({text}) {
  return (
    <div className="Header">
      <h1>{text}</h1>
    </div>
  );
}

export default Header;