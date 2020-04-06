import React, { Component } from 'react';
import './Calculator.css';
import * as Constants from '../constants';

import AttackingBar from './AttackingBar/attackingBar';
import DefendingBar from './DefendingBar/defendingBar';
import UnitSelection from './Screens/UnitSelection/unitSelection';
import BlurComponent from './UtilityComponents/BlurComponent/blurComponent';

class Calculator extends Component {
  state = {
    // calculation variables
    attacking_units: {
      infantry: 0,
      cavalry: 0,
      artillery: 0,
      general: 0
    },
    defending_unit: null,
    defending_unit_in_town_or_mountain: false,
    latest_result: null,
    // UX variables:
    show_decrement_attack: null,
    dropdown_defence: false,
    // Screen variables
    units_selected: false,
    units_confirmed: false,
    game_resoved: false
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
      this.setState({latest_result: this.interpretOutcome(outcome)})
      return this.interpretOutcome(outcome);
    } else {
      return null;
    }
  }

  incrementUnitToAttack = (unitType, is_added) => {
    this.setState((state, props) => {
      const newAttackingUnits = state.attacking_units;
      if (!(is_added === false && state.attacking_units[unitType] === 0)) {
        newAttackingUnits[unitType] = is_added ? newAttackingUnits[unitType] + 1 : newAttackingUnits[unitType] - 1;
      }
      // show the visibility of the decrement for the currently concered unit
      return {attacking_units: newAttackingUnits, show_decrement_attack: unitType};
    });
  }

  setDefensiveUnit = unitType => {
    this.setState({defending_unit: unitType, dropdown_defence: false})
  }

  toggleUnitSelectionVisibility = unitType => {
    this.setState((state, props) => {
      return {dropdown_defence: !state.dropdown_defence}
    });
  }

  closeUxComponents = () => {
    this.setState((state, props) => {
      return {show_decrement_attack: null, dropdown_defence: false}
    });
  }

  toggleTerrainBonus = () => {
    this.setState((state, props) => {
      return {defending_unit_in_town_or_mountain: !state.defending_unit_in_town_or_mountain}
    });
  }

  render() {
    // This will either show or hide the overlay used to deselect UX components
    const BlurComponentToShow = (this.state.show_decrement_attack !== null || this.state.dropdown_defence) ? <BlurComponent closeUxComponents={this.closeUxComponents}/> : null
    return (
      <div className="Calculator">
        {BlurComponentToShow}
        <DefendingBar
        terrainBonusOn={this.state.defending_unit_in_town_or_mountain}
        showDropdownDefence={this.state.dropdown_defence}
        toggleTerrainBonus={this.toggleTerrainBonus}
        toggleUnitSelectionVisibility={this.toggleUnitSelectionVisibility}
        setDefensiveUnit={this.setDefensiveUnit}
        defending_unit={this.state.defending_unit}
        />
        <UnitSelection 
        computeAttackingStrikePoints={this.computeAttackingStrikePoints}
        computeDefendingStrikePoints={this.computeDefendingStrikePoints}
        defending_unit={this.state.defending_unit}
        />
        <AttackingBar
        addOrRemoveUnit={this.incrementUnitToAttack}
        showDecrement={this.state.show_decrement_attack}
        />
      </div>
    );
  }
}

export default Calculator;
