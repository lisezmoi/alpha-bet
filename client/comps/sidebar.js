import React from 'react'
import Letters from './letters'

const Sidebar = props => (
  <div className='Sidebar'>
    <Letters
      onStartBet={props.onStartBet}
      onEndBet={props.onEndBet}
    />
  </div>
)

export default Sidebar
