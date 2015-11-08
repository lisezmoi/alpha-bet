import React from 'react'

const About = props => (
  <div className={'About' + (props.opened? ' About-opened' : '')}>
    Alpha Bet <br/>
    A project by <a href='http://lisezmoi.org/'>LISEZMOI</a>
    <br/>
    for Node.js Knockout 2015
    <br/>
    <a href='https://github.com/lisezmoi/alpha-bet'>
      Source
    </a>
    <iframe
      className='support mobile'
      src='http://nodeknockout.com/iframe/lisezmoi'
      frameBorder='0'
      scrolling='no'
      allowTransparency='true'
      width='115'
      height='25'
    />
    <span
      className='about-button'
      onClick={props.onToggleAbout}
    >×</span>
  </div>
)

export default About
