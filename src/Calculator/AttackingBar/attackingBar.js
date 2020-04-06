import React from 'react';
import './attackingBar.css';

import DecrementUnitBtn from './DecrementUnitBtn/decrementUnitBtn'

import infantryLogo from '../../assets/infantry_logo.png';
import cavalryLogo from '../../assets/cavalry_logo.png';
import artilleryLogo from '../../assets/artillery_logo.png';
import generalLogo from '../../assets/general_logo.png';

const attackingBar = props => {
  return (
    <div className="attackingBar actionBar">
      <div className="attackingBarBtn actionBarBtn">
        <div className="actionBarBtnAdd" onClick={() => props.addOrRemoveUnit("infantry", true)}>
          <img  src={infantryLogo} alt="Infantry Logo" className="unitLogo" />
        </div>
        <DecrementUnitBtn showElement={props.showDecrement === "infantry"} addOrRemoveUnit={props.addOrRemoveUnit} unitType="infantry"/>
      </div>

      <div className="attackingBarBtn actionBarBtn">
        <div className="actionBarBtnAdd" onClick={() => props.addOrRemoveUnit("cavalry", true)}>
          <img  src={cavalryLogo} alt="Cavalry Logo" className="unitLogo" />
        </div>
        <DecrementUnitBtn showElement={props.showDecrement === "cavalry"} addOrRemoveUnit={props.addOrRemoveUnit} unitType="cavalry"/>
      </div>

      <div className="attackingBarBtn actionBarBtn">
        <div className="actionBarBtnAdd" onClick={() => props.addOrRemoveUnit("artillery", true)}>
          <img  src={artilleryLogo} alt="Artillery Logo" className="unitLogo" />
        </div>
        <DecrementUnitBtn showElement={props.showDecrement === "artillery"} addOrRemoveUnit={props.addOrRemoveUnit} unitType="artillery"/>
      </div>

      <div className="attackingBarBtn actionBarBtn">
        <div className="actionBarBtnAdd" onClick={() => props.addOrRemoveUnit("general", true)}>
          <img  src={generalLogo} alt="General Logo" className="unitLogo" />
        </div>
        <DecrementUnitBtn showElement={props.showDecrement === "general"} addOrRemoveUnit={props.addOrRemoveUnit} unitType="general"/>
      </div>
    </div>
  );
};

export default attackingBar;