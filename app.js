'use strict'

const fs = require('fs')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const PROD = process.env.NODE_ENV === 'production'
const ASSETS_BASE = PROD? '/' : 'http://localhost:3000/'

const app = express()
const server = http.Server(app)
const io = socketio(server)

const createPoemLines = () => {
  const poem = fs.readFileSync('poem.txt', 'utf8').split('\n')
  let index = 0
  return () => poem[index > poem.length - 1? (index = 0) : index++]
}
const poemLine = createPoemLines()

let history = []
let i = 0
const tick = () => {
  setTimeout(tick, 1000)
  const line = poemLine()
  history = [...history.slice(-39), { line }]
  io.emit('text-line', { line })
}
tick()

io.on('connection', socket => {
  socket.emit('text-history', history)
  console.log('A user connected!')
})

const homepage = fs.readFileSync(__dirname + '/public/index.html', 'utf8')
                   .replace(/\{BASE\}/g, ASSETS_BASE)

app.get('/', (req, res) => {
  res.send(homepage)
})

app.use(express.static(__dirname + '/public'))

const port = 8080
server.listen(port)
console.log('Express server started on port %s', port)
