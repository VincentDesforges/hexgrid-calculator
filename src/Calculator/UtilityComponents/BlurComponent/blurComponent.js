import React from 'react';
import './blurComponent.css';

const blurComponent = props => {
  return (
    <div className="blurComponent" onClick={props.closeUxComponents}></div>
  );
};

export default blurComponent;