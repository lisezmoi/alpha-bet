import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../action-creators'
import Main from './main'
import Sidebar from './sidebar'
import About from './about'

const stateToProps = state => ({
  users: state.users,
  lines: state.lines,
  aboutOpened: state.aboutOpened,
})

class App extends React.Component {
  toggleAbout() {
    this.props.dispatch(actions.toggleAbout())
  }
  render() {
    const { props } = this
    const { dispatch } = props
    return (
      <div className='main-in'>
        <div className='App'>
          <Main
            lines={props.lines}
            onToggleAbout={this.toggleAbout.bind(this)}
          />
          <Sidebar
            onStartBet={props.onStartBet}
            onEndBet={props.onEndBet}
            users={props.users}
          />
        </div>
        <About
          opened={props.aboutOpened}
          onToggleAbout={this.toggleAbout.bind(this)}
        />
      </div>
    )
  }
}

export default connect(stateToProps)(App)
