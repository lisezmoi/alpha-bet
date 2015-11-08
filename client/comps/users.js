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
    {users.map(user => {
      const className = user === 'pierre'? 'me' : ''
      return (
        <li className={className}>
          <span className='user-icon'>{user}</span> <span className='letter'>B</span> <span className='score'>$200</span>
        </li>
      )
    })}
    </ul>
  </div>
)

export default Users
