import * as actions from './action-creators'

const initState = {
  bets: [],
  lines: [],
}

export const bets = (state = initState.bets, action) => {
  return state
}

export const lines = (state = initState.lines, action) => {
  if (action.type === actions.ADD_LINE) {
    console.log([...state.slice(-39), action.line])
    return [...state.slice(-39), action.line]
  }
  return state
}
