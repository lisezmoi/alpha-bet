import * as actions from './action-creators'

const istate = {
  userId: null,
  users: [],
  bets: [],
  lines: [],
  aboutOpened: false,
  pressedLetter: null,
}

export const userId = (state = istate.userId, action) => {
  if (action.type === actions.UPDATE_USER_ID) {
    return action.userId
  }
  return state
}

export const pressedLetter = (state = istate.pressedLetter, action) => {
  if (action.type === actions.PRESS_LETTER) {
    return action.letter
  }
  return state
}

export const aboutOpened = (state = istate.aboutOpened, action) => {
  if (action.type === actions.TOGGLE_ABOUT) {
    return !state
  }
  return state
}

export const users = (state = istate.users, action) => {
  if (action.type === actions.UPDATE_USERS) {
    return action.users.slice()
  }
  return state
}

export const bets = (state = istate.bets, action) => {
  return state
}

export const lines = (state = istate.lines, action) => {
  if (action.type === actions.ADD_LINE) {
    return [...state.slice(-39), action.line]
  }
  if (action.type === actions.REPLACE_LINES) {
    return action.lines.slice()
  }
  return state
}
