'use strict'

const fs = require('fs')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.Server(app)
const io = socketio(server)

const createPoemLines = () => {
  const poem = fs.readFileSync('poem.txt', 'utf-8').split('\n')
  let index = 0
  return () => poem[index = index > poem.length - 1? 0 : index + 1]
}
const poemLine = createPoemLines()

let i = 0
const tick = () => {
  // if (i++ > 5) return
  setTimeout(tick, 500)
  io.emit('text-line', { line: poemLine() })
}
tick()

io.on('connection', socket => {
  // socket.emit('news', { hello: 'world' })
  console.log('A user connected!')
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/public/index.html')
})

const port = 8080
server.listen(port)
console.log('Express server started on port %s', port)
