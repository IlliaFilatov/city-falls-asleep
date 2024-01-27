'use client'

import { useState, useEffect, useRef } from 'react'
import io, { Socket } from 'socket.io-client'

const Room = () => {
  const [messages, setMessages] = useState<Array<string>>([])
  const [currentMessage, setCurrentMessage] = useState('')

  const socket = useRef<Socket | null>(null)

  useEffect(() => {
    socket.current = io('http://localhost:8081', { transports: ['websocket'] })

    socket.current.on('connect', () => {
      console.log('connected!')
    })

    socket.current.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`)
    })

    socket.current.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })

    return () => {
      socket.current?.disconnect()
    }
  }, [])

  const sendMessage = () => {
    socket.current?.emit('message', currentMessage)
    setCurrentMessage('')
  }

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}

      <input
        type='text'
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Room
