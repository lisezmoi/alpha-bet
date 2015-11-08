import io from 'socket.io-client'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import App from './comps/app'
import * as reducers from './reducers'
import * as actions from './action-creators'

const store = createStore(combineReducers(reducers))
const socket = io.connect()

socket.on('text-line', line => {
  store.dispatch(actions.addLine(line))
})

socket.on('text-history', lines => {
  store.dispatch(actions.replaceLines(lines))
})

socket.on('user-id', userId => {
  store.dispatch(actions.updateUserId(userId))
})

socket.on('users', users => {
  store.dispatch(actions.updateUsers(users))
})

const startBet = letter => {
  socket.emit('start-bet', letter)
}
const endBet = letter => {
  socket.emit('end-bet', letter)
}

ReactDOM.render((
  <Provider store={store}>
    <App
      onStartBet={letter => startBet(letter)}
      onEndBet={letter => endBet(letter)}
    />
  </Provider>
), document.querySelector('main'))
