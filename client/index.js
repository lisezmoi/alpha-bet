import io from 'socket.io-client'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import App from './comps/app'
import * as reducers from './reducers'
import * as actions from './action-creators'

const store = createStore(combineReducers(reducers))

store.subscribe(() => {
  // console.log(store.getState())
})

const socket = io.connect()

socket.on('text-line', line => {
  store.dispatch(actions.addLine(line))
})

socket.on('text-history', lines => {
  store.dispatch(actions.replaceLines(lines))
})

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.querySelector('main'))
