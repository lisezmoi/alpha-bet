import React from 'react'

const users = [
  '( >д< )',
  '( ;¬_¬)',
  '(ಠ ∩ ಠ)',
  '<(`^´)>',
  '┐(ﾟ～ﾟ)┌',
  '╰|⊡_⊡|╯',
  '|(ᗒᗣᗕ)|',
  '[ ⊙～⊙]',
  '(*’･Д･)',
  '(||ﾟДﾟ}',
  '\/\/ ･ั_･ั)',
  '(_ŏ.ŏ)/',
  '[ ¤_¤]',
  '( •᷄⌓•᷅ )',
  '૮(‘▱๋’ )',
  ]

const Users = props => (
  <div className='Users'>
    <ul>
    {props.users.map(user => {
      // const className = user === 'pierre'? 'me' : ''
      const className = ''
      return (
        <li className={className}>
          <span className='user-icon'>
            {user.face}
          </span>
          {' '}
          <span className='letter'>
            A
          </span>
          {' '}
          <span className='score'>$200</span>
        </li>
      )
    })}
    </ul>
  </div>
)

export default Users
