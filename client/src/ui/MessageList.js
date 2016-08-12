import React from 'react'
import dateformat from 'dateformat'

const Message = (props) => {
  const { message } = props

  return (
    <li>
      <span>{dateformat(message.get('createdAt'), 'HH:MM:ss')}</span>
      <span>{message.get('username')}</span>
      <span>{message.get('message')}</span>
    </li>
  )
}

export default (props) => {
  const { messages } = props

  if (messages.size === 0) {
    return (
      <div>
        <h2>Messages</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>Messages</h2>
      <ul>{props.messages.map(message => (<Message key={message.get('id')} message={message}/>))}</ul>
    </div>
  )
}
