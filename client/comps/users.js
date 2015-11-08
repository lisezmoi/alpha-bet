import React from 'react'

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
          {user.bets.map((bet, i) => (
            <span className='letter' key={i}>{bet}</span>
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
