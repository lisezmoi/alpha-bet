import React from 'react'

const Users = props => (
  <div className='Users'>
    <ul>
    {props.users.map(user => {
      // const className = user === 'pierre'? 'me' : ''
      const className = ''
      return (
        <li className={className}>
        </li>
      )
    })}
    </ul>
  </div>
)

export default Users
