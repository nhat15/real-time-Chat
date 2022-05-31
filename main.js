const express = require('express')
const app = express()
const port = 3000
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')
const path = require('path')

const io = new Server(server)

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/ChatInterface/login.html")
})

io.on('connection', (socket) => {
    console.log("A user connected");
});

app.listen(port, function () {
    console.log("Server listening on port " + port)
})