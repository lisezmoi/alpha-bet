import React from 'react'
import Logo from './logo'
import Lines from './lines'
import Graph from './graph'

const Main = props => (
  <div className='Main'>
    <Lines
      lines={props.lines}
      userId={props.userId}
    />
    <Graph
      betHistory={props.betHistory}
    />
    <Logo
      onToggleAbout={props.onToggleAbout}
    />
  </div>
)
export default Main
