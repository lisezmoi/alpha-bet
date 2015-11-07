import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import App from './comps/app'
import * as reducers from './reducers'

const store = createStore(
  combineReducers(reducers)
)

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.querySelector('#app-container'))
