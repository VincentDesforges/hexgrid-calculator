import React from 'react';
import './attackingBar.css';

const attackingBar = props => {
  return (
    <div className="attackingBar actionBar">
      <div className="actionBarBtn">Btn1</div>
      <div className="actionBarBtn">Btn2</div>
      <div className="actionBarBtn">Btn3</div>
      <div className="actionBarBtn">Btn4</div>
    </div>
  );
};

export default attackingBar;