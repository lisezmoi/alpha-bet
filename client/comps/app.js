import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../action-creators'
import Main from './main'
import Sidebar from './sidebar'
import About from './about'

class App extends React.Component {
  toggleAbout() {
    console.log('toggle', this.props)
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
          />
        </div>
        <About
          opened={props.aboutOpened}
          onToggleAbout={this.toggleAbout.bind(this)}
        />
      <iframe className='support' src='http://nodeknockout.com/iframe/lisezmoi' frameborder='0' scrolling='no' allowtransparency='true' width='115' height='25'></iframe>
      </div>
    )
  }
}

const stateToProps = state => ({
  lines: state.lines,
  aboutOpened: state.aboutOpened,
})

export default connect(stateToProps)(App)
