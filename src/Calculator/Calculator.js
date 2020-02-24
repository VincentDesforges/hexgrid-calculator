import React, { Component } from 'react';

class Calculator extends Component {
  state = {
    attacking_player: 1,
    attacking_units: {
      infantry: 1,
      cavalry: 2,
      artillery: 1,
      general:1
    },
    defending_unit: "infantry",
    // defending_unit: null,
    defending_unit_in_town_or_mountain: false
    // defending_unit_in_town_or_mountain: true
  }

  unit_datas = { // constants with unit datas
    infantry: 5,
    cavalry: 3,
    artillery: 3,
    general: 5
  }

  // 0: Defence Killed,
  // 1: Defence Pushed Back, 
  // 2: Attacker Pushed Back, 
  // 3: Attacker Killed
  outComeGrid = {
    r1_6: [2, 2, 3, 3, 3, 3],
    r1_5: [2, 2, 2, 3, 3, 3],
    r1_4: [2, 2, 2, 2, 3, 3],
    r1_3: [1, 2, 2, 2, 2, 3],
    r1_2: [1, 1, 2, 2, 2, 2],
    r1_1: [1, 1, 1, 2, 2, 2],
    r2_1: [1, 1, 1, 1, 2, 2],
    r3_1: [0, 1, 1, 1, 1, 2],
    r4_1: [0, 0, 1, 1, 1, 1],
    r5_1: [0, 0, 0, 1, 1, 1],
    r6_1: [0, 0, 0, 0, 1, 1],
    r7_1: [0, 0, 0, 0, 0, 1],
    r8_1: [0, 0, 0, 0, 0, 0]
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
    return Object.keys(this.state.attacking_units).reduce((acc, cv) => acc + this.unit_datas[cv] * this.state.attacking_units[cv], 0)
  }

  computeDefendingStrikePoints = () => {
    const score = this.unit_datas[this.state.defending_unit] ? this.unit_datas[this.state.defending_unit] : 0
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
      const outcome = this.outComeGrid[ratio][diceRoll];
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
        <p>This is the Calculator</p>
        <p>Attacking player: player {this.state.attacking_player} | Strike points: {this.computeAttackingStrikePoints()}</p>
        <p>Defending player: player {this.state.attacking_player === 1 ? 2 : 1} | Strike points: {this.computeDefendingStrikePoints()}</p>
        <button onClick={this.determineOutcome}>Determine outcome!</button>
        <p>Outcome: {}</p>
      </div>
    );
  }
}

export default Calculator;
