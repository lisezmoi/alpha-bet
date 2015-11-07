export const START_BET = 'START_BET'
export const END_BET = 'END_BET'

export const startBet = letter => ({
  type: START_BET,
  letter,
})
export const endBet = letter => ({
  type: END_BET,
  letter,
})
