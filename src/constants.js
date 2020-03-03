// constants with unit datas
export const UNIT_DATAS = {
  infantry: 5,
  cavalry: 3,
  artillery: 3,
  general: 5
}

// POSSIBLE OUTCOMES
// 0: Defence Killed,
// 1: Defence Pushed Back, 
// 2: Attacker Pushed Back, 
// 3: Attacker Killed
export const OUTCOME_GRID = {
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
};