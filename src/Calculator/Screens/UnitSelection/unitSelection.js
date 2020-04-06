import React from 'react';
import './unitSelection.css';

import infantryLogo from '../../../assets/infantry_logo.png'
import cavalryLogo from '../../../assets/cavalry_logo.png';
import artilleryLogo from '../../../assets/artillery_logo.png';
import generalLogo from '../../../assets/general_logo.png';

const unitSelection = props => {
  let logoSrc = null;
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
      logoSrc = null
  }

  const defensiveUnit = <img src={logoSrc} alt="Defensive Unit" className="unitLogo" />

  return (
    <div className="CalculatorContent">
      <p>Defending player: Strike points: {props.computeDefendingStrikePoints()}</p>
      <div>
        { logoSrc ? defensiveUnit : null }
      </div>
      <p>Attacking player: Strike points: {props.computeAttackingStrikePoints()}</p>
      <div className="SelectedAttackingUnits">
        <img src={infantryLogo} alt="Infantry Logo" className="unitLogo SelectedAttackingUnit" />
        <img src={cavalryLogo} alt="Cavalry Logo" className="unitLogo SelectedAttackingUnit" />
        <img src={artilleryLogo} alt="Artillery Logo" className="unitLogo SelectedAttackingUnit" />
        <img src={generalLogo} alt="General Logo" className="unitLogo SelectedAttackingUnit" />
      </div>     
    </div>
  );
};

export default unitSelection;