import React from 'react'

const Lines = props => (
  <div className='Lines'>
    {props.lines.map((line, i) => (
      <div
        key={line.index}
        className={'line'}
      >
        {line.content.split('').map((char, i) => {
          const lowChar = char.toLowerCase()
          const className = (
            'letter' +
            (line.bets[lowChar]? ' letter-other' : '') +
            (line.bets[lowChar] && line.bets[lowChar].indexOf(props.userId) > -1? ' letter-current' : '')
          )
          return (
            <span className={className} key={i}>{char}</span>
          )
        })}
      </div>
    ))}
  </div>
)

export default Lines
