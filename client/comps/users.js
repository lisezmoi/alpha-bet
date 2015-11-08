import React from 'react'

// const users = ['pierre','raphaël']

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
