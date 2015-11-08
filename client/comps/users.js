import React from 'react'

const users = ['pierre','raphaël','pierre','raphaël','pierre','raphaël','pierre','raphaël',]

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
