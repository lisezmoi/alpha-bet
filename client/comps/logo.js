import React from 'react'

const Logo = props => (
  <div className='Logo'>
    <h1>Alpha Bet</h1>
    <span
      className='Logo-about'
      onClick={props.onToggleAbout}
    >i</span>
  </div>
)

export default Logo
