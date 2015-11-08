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
  '( °д’)/',
  '(╬ ಠ⌓ಠ)',
  '/ ⊙▃⊙/',
  '( ‾᷅⚰‾᷄ )',
  'ʕ•̀ o •́ ʔ',
  'ᘳᗒ.ᗕᘰ',
  'ヾ(`⌓´)ﾉﾞ',
  '┗|｀O´|┛',
  '2(°L°)',
  '( ¤.¤)',
  '┗( °⌓°)',
  '(°v° )',
  '[ °^°]/',
  '(c ಠ.ಠ)',
  '| ⊙v⊙|',
  '< ‾᷅.‾᷄ >',
  ]

const Users = props => (
  <div className='Users'>
    <ul>
    {props.users.map((user, i) => {
      // const className = user === 'pierre'? 'me' : ''
      const className = ''
      return (
        <li className={className} key={i}>
          <span className='user-icon'>
            {user.face}
          </span>
          {' '}
          {user.bets.map(bet => (
            <span className='letter'>{bet}</span>
          ))}
          {' '}
          <span className='score'>${user.amount}</span>
        </li>
      )
    })}
    </ul>
  </div>
)

export default Users
