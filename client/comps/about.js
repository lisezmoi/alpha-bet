import React from 'react'

const About = props => (
  <div className={'About' + (props.opened? ' About-opened' : '')}>
    A project by <a href='http://lisezmoi.org/'>LISEZMOI</a>
    <br/>
    for Node.js Knockout 2015
    <br/>
    <a href='https://github.com/lisezmoi/alpha-bet'>
      Source
    </a>
    <span
      className='about-button'
      onClick={props.onToggleAbout}
    >×</span>
  </div>
)

export default About
