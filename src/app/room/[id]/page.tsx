'use client'

import { useState, useEffect, useRef } from 'react'
import io, { Socket } from 'socket.io-client'
import { Peer } from 'peerjs'

const Room = () => {
  const [messages, setMessages] = useState<Array<string>>([])
  const [currentMessage, setCurrentMessage] = useState('')

  const peer = useRef<Peer | null>(null)
  const socket = useRef<Socket | null>(null)

  useEffect(() => {
    // SOCKET CONTROLS //
    socket.current = io('http://localhost:8081', { transports: ['websocket'] })

    socket.current.on('connect', () => {
      console.log('connected!')
      socket.current?.emit('joinRoom', 'test_room')
      console.log('socket.current: ', socket.current)
    })

    socket.current.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`)
    })

    socket.current.on('messageToClient', (message) => {
      console.log('messageToClient: ', message)
      setMessages((prevMessages) => [...prevMessages, message])
    })

    // PEER CONTROLS //
    peer.current = new Peer()
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const videoElement = document.querySelector('video')
        console.log('getUserMedia: ', stream)
        videoElement!.srcObject = stream
      })
      .catch((err) => {
        console.log('error: ', err)
      })

    peer.current.on('open', (id) => {
      console.log('peer id: ', id)
    })

    peer.current.on('connection', (conn) => {
      conn.on('data', (data) => {
        // Will print 'hi!'
        console.log(data)
      })
      conn.on('open', () => {
        conn.send('hello!')
      })
    })

    peer.current.on('call', (call) => {
      navigator.mediaDevices.getUserMedia(
        { video: true, audio: true },
        // @ts-ignore
        (stream) => {
          call.answer(stream) // Answer the call with an A/V stream.
          call.on('stream', (remoteStream) => {
            // Show stream in some <video> element.
          })
        },
        (err: any) => {
          console.error('Failed to get local stream', err)
        },
      )
    })

    navigator.mediaDevices.getUserMedia(
      { video: true, audio: true },
      // @ts-ignore
      (stream) => {
        const call = peer.current?.call('another-peers-id', stream)
        call?.on('stream', (remoteStream) => {
          // Show stream in some <video> element.
        })
      },
      (err: any) => {
        console.error('Failed to get local stream', err)
      },
    )

    return () => {
      socket.current?.disconnect()
    }
  }, [])

  console.log(peer)

  const sendMessage = () => {
    socket.current?.emit('messageToServer', currentMessage)
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

      <video
        id='stream'
        autoPlay
        style={{ width: '720px', height: '480px', transform: 'scaleX(-1)' }}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Room
