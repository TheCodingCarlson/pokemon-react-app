import React from 'react';
import './styles/Button.less';

const Button = ({text, onClickFunction}) => {
  return (
    <div className="button-container">
          <button 
            className="button-primary" 
            onClick={() => onClickFunction()}>
            {text}
          </button>
    </div>
  );
}

export default Button;