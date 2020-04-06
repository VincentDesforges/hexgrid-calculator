import React from 'react';
import './defendingBar.css';
import UnitSelectionBar from './UnitSelectionBar/unitSelectionBar'

import unselectedLogo from '../../assets/unselected_logo.png';
import infantryLogo from '../../assets/infantry_logo.png';
import cavalryLogo from '../../assets/cavalry_logo.png';
import artilleryLogo from '../../assets/artillery_logo.png';
import generalLogo from '../../assets/general_logo.png';

const defendingBar = props => {
  let logoSrc = unselectedLogo;
  switch(props.defending_unit) {
    case "infantry":
      logoSrc = infantryLogo
      break;
    case "cavalry":
      logoSrc = cavalryLogo
      break;
    case "artillery":
      logoSrc = artilleryLogo
      break;
    case "general":
      logoSrc = generalLogo
      break;
    default:
      logoSrc = unselectedLogo
  }
  return (
    <React.Fragment>
      <div className="defendingBar actionBar">
        <div className="defendingBarBtn actionBarBtn"
        onClick={props.toggleUnitSelectionVisibility}>
          <img  src={logoSrc} alt="Unselected Logo" className="unitLogo" />
        </div>
        <div
        className="defendingBarBtn actionBarBtn"
        style={{ fontWeight: 900 }}
        onClick={props.toggleTerrainBonus}>Terrain Bonus <span><span className={props.terrainBonusOn ? "terrainBonusON" : null}>ON</span>/<span className={props.terrainBonusOn ? null:  "terrainBonusOFF"} >OFF</span></span></div>

        <UnitSelectionBar
        setDefensiveUnit={props.setDefensiveUnit}
        showElement={props.showDropdownDefence}
        />
      </div>
    </React.Fragment>
  );
};

export default defendingBar;