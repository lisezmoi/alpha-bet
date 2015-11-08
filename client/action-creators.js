export const START_BET = 'START_BET'
export const END_BET = 'END_BET'
export const ADD_LINE = 'ADD_LINE'
export const REPLACE_LINES = 'REPLACE_LINES'
export const TOGGLE_ABOUT = 'TOGGLE_ABOUT'
export const UPDATE_USERS = 'UPDATE_USERS'
export const PRESS_LETTER = 'PRESS_LETTER'
export const UPDATE_USER_ID = 'UPDATE_USER_ID'
export const UPDATE_BET_HISTORY = 'UPDATE_BET_HISTORY'

export const updateBetHistory = betHistory => ({
  type: UPDATE_BET_HISTORY,
  betHistory,
})
export const pressLetter = letter => ({
  type: PRESS_LETTER,
  letter,
})
export const startBet = letter => ({
  type: START_BET,
  letter,
})
export const updateUsers = users => ({
  type: UPDATE_USERS,
  users,
})
export const endBet = letter => ({
  type: END_BET,
  letter,
})
export const addLine = line => ({
  type: ADD_LINE,
  line,
})
export const replaceLines = lines => ({
  type: REPLACE_LINES,
  lines,
})
export const updateUserId = userId => ({
  type: UPDATE_USER_ID,
  userId,
})
export const toggleAbout = () => ({
  type: TOGGLE_ABOUT
})
