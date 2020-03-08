import React from 'react';
import './decrementUnitBtn.css';

const decrementUnitBtn = props => {
  return (
    <div className="decrementUnitBtn" 
    style={ props.showElement ? {display: "inherit"} : {display: "none"} }
    onClick={() => props.addOrRemoveUnit(props.unitType, false)}>
      -
    </div>
  );
};

export default decrementUnitBtn;