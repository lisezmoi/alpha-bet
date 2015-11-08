import React from 'react'

const End = props => (
  <div className={'End ' + (props.opened? 'End-opened' : '')}>
    <p>Game over</p>
    <p><a href='/'>Try again</a></p>
  </div>
)

export default End
