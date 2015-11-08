import React from 'react'

const Users = props => (
  <div className='Users'>
    {props.users && props.userId? (
      <ul>
        {props.users.sort((a, b) => b.amount - a.amount).map((user, i) => {
          const className = user.id === props.userId? 'me' : ''
          return (
            <li className={className} key={user.id}>
              <span className='user-icon'>
                {user.face}
              </span>
              {' '}
              {user.bets.map((bet, i) => (
                <span className='letter' key={i}>{bet.toUpperCase()}</span>
              ))}
              {' '}
              <span className='score'>
                <span className='coin'>●</span>
                {user.amount.toFixed(2).split('.').map((p,i) => (
                  <span className='float'>{(i === 0? '':'.') + p}</span>
                ))}
              </span>
            </li>
          )
        })}
      </ul>
    ) : null}
  </div>
)

export default Users
