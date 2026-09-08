const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

let messages = [
  { text: 'Containerized Full-Stack App Live!' },
  { text: 'Powered by Docker Compose & Nginx' }
]

app.get('/messages', (req, res) => {
  res.json(messages)
})

app.post('/messages', (req, res) => {
  const newMsg = { text: req.body.text || 'Untitled' }
  messages.push(newMsg)
  res.status(201).json(newMsg)
})

app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date() })
})

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`)
})
