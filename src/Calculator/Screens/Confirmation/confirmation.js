import React from 'react';
import './confirmation.css';

const confirmation = props => {
  

  return (
    <div className="CalculatorContent UnitConfirmationScreen">
      <div>
        <div className="progressButton BackBtn" onClick={() => props.setScreenStatus("start")}>Go Back</div>
        <div className="progressButton ConfirmBtn" onClick={() => props.setScreenStatus("units_confirmed")}>Confirm Selection</div>
      </div>

      <div className="DefenceColumn UnitConfirmationScreenColumn">
        <h2 className="ColumnTitle">Defence</h2>
        <div className="pointsTotal">
          <p className="strikePoints">Strike points: {props.computeDefendingStrikePoints()}</p>
        </div>
      </div>

      <div className="AttackColumn UnitConfirmationScreenColumn">
        <h2 className="ColumnTitle">Attack</h2>
        <div className="pointsTotal">
          <p className="strikePoints">Strike points: {props.computeAttackingStrikePoints()}</p>
        </div>
      </div>
    </div>
  );
};

export default confirmation;