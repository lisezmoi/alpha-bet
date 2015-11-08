import React from 'react'

const About = props => (
  <div className={'About' + (props.opened? ' About-opened' : '')}>
    <div className='col'>
      Alpha Bet <br/>
      A project by <a href='http://lisezmoi.org/'>LISEZMOI</a>
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
    <div className='col'>
      <p>Alpha Bet is a game where letters are products. Bet on it, receive money. You will have to buy and sell in time to defeat and beat the most talented letter gamblers on the Internet.</p>
      <p>This project has been made in 48 hours for Node.js Knockout 2015. Source code can be found on the <a href="https://github.com/lisezmoi/alpha-bet">team’s repository</a>.</p>
    </div>
  </div>
)

export default About
