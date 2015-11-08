import React from 'react'

const chars = '.ABCD.EFGHIJKLMNOPQRSTUV.WXYZ.'.split('')

const Letters = props => (
  <div className='Letters'>
    {chars.map((char, i) => {
      const className = char === '.'? 'Letters-letter-blank' : ''
      return (
        <span
          key={i}
          className={className}
          onMouseDown ={() => props.onStartBet(char)}
          onMouseUp={() => props.onEndBet(char)}
        >
          <span>{char}</span>
        </span>
      )
    })}
  </div>
)

export default Letters
