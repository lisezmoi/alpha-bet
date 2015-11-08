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
