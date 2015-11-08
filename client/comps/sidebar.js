import React from 'react'
import Letters from './letters'
import Users from './users'

const Sidebar = props => (
  <div className='Sidebar'>
    <h2>Press and hold on a letter to bet</h2>
    <Letters
      onPressLetter={props.onPressLetter}
      onStartBet={props.onStartBet}
      onEndBet={props.onEndBet}
    />
    <h2>Participants</h2>
    <Users
      userId={props.userId}
      users={props.users}
    />
  </div>
)

export default Sidebar
