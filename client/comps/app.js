import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../action-creators'

import Header from './header'
import Main from './main'
import Footer from './footer'

class App extends React.Component {
  render() {
    const { props } = this
    const { dispatch } = props
    return (
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

const stateToProps = state => ({
  test: 'aa'
})

export default connect(stateToProps)(App)
