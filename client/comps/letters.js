import React from 'react'

const chars = '.ABCD.EFGHIJKLMNOPQRSTUV.WXYZ.'.split('')

const Letters = props => (
  <div className='Letters'>
    {chars.map((char, i) => {
      const className = char === '.'? 'Letters-letter-blank' : ''
      const lowChar = char.toLowerCase()
      return (
        <span
          key={i}
          className={className}
          onMouseDown ={() => {
            props.onPressLetter(lowChar)
            props.onStartBet(lowChar)
          }}
          onMouseUp={() => props.onEndBet(lowChar)}
        >
          <span
            data-risk='12'
            >{char}</span>
        </span>
      )
    })}
  </div>
)

export default Letters
