import * as actions from './action-creators'

const initState = {
  users: [],
  bets: [],
  lines: [],
  aboutOpened: false,
}

export const aboutOpened = (state = initState.aboutOpened, action) => {
  if (action.type === actions.TOGGLE_ABOUT) {
    return !state
  }
  return state
}

export const users = (state = initState.users, action) => {
  if (action.type === actions.UPDATE_USERS) {
    return action.users.slice()
  }
  return state
}

export const bets = (state = initState.bets, action) => {
  return state
}

export const lines = (state = initState.lines, action) => {
  if (action.type === actions.ADD_LINE) {
    return [...state.slice(-39), action.line]
  }
  if (action.type === actions.REPLACE_LINES) {
    return action.lines.slice()
  }
  return state
}
