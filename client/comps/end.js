import React from 'react'

const End = props => (
  <div className='End'>
    <p>Game over</p>
    <p><a href='/'>Try again</a></p>
    <iframe
      className='support end'
      src='http://nodeknockout.com/iframe/lisezmoi'
      frameBorder='0'
      scrolling='no'
      allowTransparency='true'
      width='115'
      height='25'
    />
  </div>
)

export default End
