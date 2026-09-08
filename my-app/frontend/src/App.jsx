import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_BACKEND_URL || '/api'

export default function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    axios.get(`${API_URL}/messages`)
      .then(res => setMessages(res.data))
      .catch(err => console.error(err))
  }, [])

  const addMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    axios.post(`${API_URL}/messages`, { text: input })
      .then(res => {
        setMessages([...messages, res.data])
        setInput('')
      })
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>My Containerized Full-Stack App</h1>
      <form onSubmit={addMessage}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a note..." />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {messages.map((m, idx) => <li key={idx}>{m.text}</li>)}
      </ul>
    </div>
  )
}
