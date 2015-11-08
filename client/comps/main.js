import React from 'react'
import Logo from './logo'

const Main = props => (
  <div className='Main'>
    <div className='Main-lines'>
    {props.lines.map((lineObject, i) => (
      <div key={i}>
        {lineObject.line}
      </div>
    ))}
    </div>
    <Logo />
  </div>
)

export default Main
