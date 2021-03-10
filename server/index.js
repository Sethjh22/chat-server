const express = require('express')
const messages = require('./controllers/messages_controller')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + './../public/build'))

app.post('/api/messages', messages.create)
app.get('/api/messages', messages.read)
app.put('/api/messages/:id', messages.update)
app.delete('/api/messages/:id', messages.delete)

app.listen(3001, () => console.log('run 3001 run'))