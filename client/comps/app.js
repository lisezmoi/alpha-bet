import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../action-creators'
import Main from './main'
import Sidebar from './sidebar'
import About from './about'
import Footer from './footer'


const stateToProps = state => ({
  userId: state.userId,
  users: state.users,
  lines: state.lines,
  aboutOpened: state.aboutOpened,
  pressedLetter: state.pressedLetter,
})

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('mouseup', () => {
      const { props } = this
      if (props.pressedLetter) {
        props.onEndBet(props.pressedLetter)
        props.dispatch(actions.pressLetter(null))
      }
    })
  }
  toggleAbout() {
    this.props.dispatch(actions.toggleAbout())
  }
  pressLetter(letter) {
    this.props.dispatch(actions.pressLetter(letter))
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
            onPressLetter={this.pressLetter.bind(this)}
            onStartBet={props.onStartBet}
            onEndBet={props.onEndBet}
            users={props.users}
            userId={props.userId}
          />
        </div>
        <About
          opened={props.aboutOpened}
          onToggleAbout={this.toggleAbout.bind(this)}
        />
      <Footer/>
      </div>
    )
  }
}

export default connect(stateToProps)(App)
