import React from 'react';
import './gameResolution.css';

const gameResolution = props => {

  let outcome = "Nothing yet :)"
  if (props.needToShowOutcome) {
    outcome = props.determineOutcome()
  }

  const rollDiceAndBackBtn = <React.Fragment>
    <div className="progressButton RollDiceBtn" onClick={() => props.setScreenStatus("game_resolved")}>Roll Dice!!</div>
    <div className="progressButton ReturnToConfirmBtn" onClick={() => props.setScreenStatus("units_selected")}>Go Back</div>
  </React.Fragment>

  const resetCalculatorBtn = <div className="progressButton ResetCalcBtn" onClick={props.resetCalculator}>Reset Calculator</div>

  const showResult = <div className="Result">
    <p>Outcome: {outcome}</p>
  </div>
  
  return (
    <div className="CalculatorContent">
      <div>
        {!props.needToShowOutcome ? rollDiceAndBackBtn : resetCalculatorBtn}
      </div>
      
      

      <div className="DefenceColumn">
        <h2 className="ColumnTitle">Defence</h2>
        <div className="pointsTotal">
          <p className="strikePoints">Strike points: {props.computeDefendingStrikePoints()}</p>
        </div>
      </div>

      <div className="AttackColumn">
        <h2 className="ColumnTitle">Attack</h2>
        <div className="pointsTotal">
          <p className="strikePoints">Strike points: {props.computeAttackingStrikePoints()}</p>
        </div>
      </div>

      {props.needToShowOutcome ? showResult : null}
    </div>
  );
};

export default gameResolution;