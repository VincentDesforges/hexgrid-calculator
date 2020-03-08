import React from 'react';
import infantryLogo from '../../../assets/infantry_logo.png';
import cavalryLogo from '../../../assets/cavalry_logo.png';
import artilleryLogo from '../../../assets/artillery_logo.png';
import generalLogo from '../../../assets/general_logo.png';

const unitSelectionBar = props => {
  return (
    <div className="unitSelectionBar actionBar" style={ props.showElement ? {display: "inherit"} : {display: "none"} }>
      <div className="actionBarBtn" 
        onClick={() => props.setDefensiveUnit("infantry")}>
        <img  src={infantryLogo} alt="Infantry Logo" className="unitLogo" />
      </div>

      <div className="actionBarBtn"
        onClick={() => props.setDefensiveUnit("cavalry")}>
        <img  src={cavalryLogo} alt="Cavalry Logo" className="unitLogo" />
      </div>

      <div className="actionBarBtn"
        onClick={() => props.setDefensiveUnit("artillery")}>
        <img  src={artilleryLogo} alt="Artillery Logo" className="unitLogo" />        
      </div>

      <div className="actionBarBtn"
        onClick={() => props.setDefensiveUnit("general")}>
        <img  src={generalLogo} alt="General Logo" className="unitLogo" />                
      </div>
    </div>  
  );
};

export default unitSelectionBar;