import React from 'react'

const Users = props => (
  <div className='Users'>
    {props.users && props.userId? (
      <ul>
        {props.users.map((user, i) => {
          const className = user.id === props.userId? 'me' : ''
          return (
            <li className={className} key={i}>
              <span className='user-icon'>
                {user.face}
              </span>
              {' '}
              {user.bets.map((bet, i) => (
                <span className='letter' key={i}>{bet.toUpperCase()}</span>
              ))}
              {' '}
              <span className='score'>${user.amount}</span>
            </li>
          )
        })}
      </ul>
    ) : null}
  </div>
)

export default Users
