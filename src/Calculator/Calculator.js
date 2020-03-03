import React, { Component } from 'react';
import './Calculator.css';
import * as Constants from '../constants';

import AttackingBar from './AttackingBar/attackingBar';
import DefendingBar from './DefendingBar/defendingBar';

class Calculator extends Component {
  state = {
    attacking_units: {
      infantry: 0,
      cavalry: 0,
      artillery: 0,
      general: 0
    },
    defending_unit: null,
    defending_unit_in_town_or_mountain: false
    // defending_unit: "infantry",
    // defending_unit_in_town_or_mountain: true
  }

  interpretOutcome = (outcome) => {
    switch (outcome) {
      case 0:
        return "Defence Killed";
      case 1:
        return "Defence Pushed Back";
      case 2:
        return "Attacker Pushed Back";
      case 3:
        return "Attacker Killed";
      default:
        // throw "unexpected input in interpretOutcome";
        console.log("Please choose your units before determining the outcome!");
    }
  }

  computeAttackingStrikePoints = () => {
    return Object.keys(this.state.attacking_units).reduce((acc, cv) => acc + Constants.UNIT_DATAS[cv] * this.state.attacking_units[cv], 0)
  }

  computeDefendingStrikePoints = () => {
    const score = Constants.UNIT_DATAS[this.state.defending_unit] ? Constants.UNIT_DATAS[this.state.defending_unit] : 0
    return this.state.defending_unit_in_town_or_mountain ? score * 2 : score
  }

  determineOutcome = () => {
    const attackPower = this.computeAttackingStrikePoints();
    const defencePower = this.computeDefendingStrikePoints();
    if (attackPower > 0 && defencePower > 0) {
      let ratio = null;
      if (attackPower < defencePower) {
        ratio = `r1_${Math.ceil(defencePower/attackPower) > 6 ? 6 : Math.ceil(defencePower/attackPower)}`;
      } else {
        ratio = `r${Math.floor(attackPower/defencePower) > 8 ? 8 : Math.floor(attackPower/defencePower)}_1`;
      }
      const diceRoll = Math.floor(Math.random() * 6);
      const outcome = Constants.OUTCOME_GRID[ratio][diceRoll];
      console.log(ratio);
      console.log(diceRoll);
      console.log(this.interpretOutcome(outcome));
      return this.interpretOutcome(outcome);
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="Calculator">
        <DefendingBar />
        <div className="CalculatorContent">
          <p>This is the Calculator</p>
          <p>Attacking player: player {this.state.attacking_player} | Strike points: {this.computeAttackingStrikePoints()}</p>
          <p>Defending player: player {this.state.attacking_player === 1 ? 2 : 1} | Strike points: {this.computeDefendingStrikePoints()}</p>
          <button onClick={this.determineOutcome}>Determine outcome!</button>
          <p>Outcome: {}</p>
        </div>
        <AttackingBar />
      </div>
    );
  }
}

export default Calculator;
