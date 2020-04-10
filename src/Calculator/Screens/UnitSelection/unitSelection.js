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
  const nextPageBtn = <div className="progressButton CompDoneBtn" onClick={() => props.setScreenStatus("units_selected")}>Confirm Selection</div>
  
  return (
    <div className="CalculatorContent UnitSelectionScreen">
      {(props.computeDefendingStrikePoints() > 0 && props.computeAttackingStrikePoints() > 0) ? nextPageBtn : null}

      <div className="DefenceColumn UnitSelectionScreenColumn">
        <h2 className="ColumnTitle">Defence</h2>
        <div className="columnContent">
          <div className="DefensiveUnitPosition">
            { logoSrc ? defensiveUnit : null }
          </div>
          <div className="DefensiveBonusPosition">
            <p>{ props.defensive_bonus ? "X2 Terrain Bonus" : null }</p>
          </div>
        </div>
        <div className="pointsTotal">
          <p className="strikePoints">Strike points: {props.computeDefendingStrikePoints()}</p>
        </div>
      </div>

      <div className="AttackColumn UnitSelectionScreenColumn">
        <h2 className="ColumnTitle">Attack</h2>
        <div className="columnContent">
          <div className="AttackingUnitTypeRow">
            <img src={infantryLogo} alt="Infantry Logo" className="unitLogoAttack" /> <p> X {props.attacking_units.infantry}</p>
          </div>
          <div className="AttackingUnitTypeRow">
            <img src={cavalryLogo} alt="Cavalry Logo" className="unitLogoAttack" /> <p> X {props.attacking_units.cavalry}</p>
          </div>
          <div className="AttackingUnitTypeRow">
            <img src={artilleryLogo} alt="Artillery Logo" className="unitLogoAttack" /> <p> X {props.attacking_units.artillery}</p>
          </div>
          <div className="AttackingUnitTypeRow">
            <img src={generalLogo} alt="General Logo" className="unitLogoAttack" /> <p> X {props.attacking_units.general}</p>
          </div>
        </div>
        <div className="pointsTotal">
          <p className="strikePoints">Strike points: {props.computeAttackingStrikePoints()}</p>
        </div>
      </div>
    </div>
  );
};

export default unitSelection;

