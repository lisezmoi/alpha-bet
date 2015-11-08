import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'

import Main from './main'
import Sidebar from './sidebar'

class App extends React.Component {
  render() {
    const { props } = this
    const { dispatch } = props
    return (
      <div className='App'>
        <Main
          lines={props.lines}
        />
        <Sidebar />
      </div>
    )
  }
}

const stateToProps = state => ({
  lines: state.lines,
  test: 'aa'
})

export default connect(stateToProps)(App)
