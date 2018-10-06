import React from 'react';
import './styles/Button.less';

const Button = ({text, onClickFunction}) => {
  return (
    <button className="button-primary" onClick={() => onClickFunction()}>{text}</button>
  );
}

export default Button;