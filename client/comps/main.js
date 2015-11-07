import React from 'react'

const Main = props => (
  <div className='Main'>
    <div className='Main-lines'>
    {props.lines.map((lineObject, i) => (
      <div key={i}>
        {lineObject.line}
      </div>
    ))}
    </div>
  </div>
)

export default Main
