const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const people = {};
const chatHandler = require('./chat-message-handler')(io);
const {join, disconnect} = require('./join-disconnect-handler')(io, people);
console.log(chatHandler);
app.use(express.static('static'));



app.get('/', (req, res) => {
    res.sendFile(__dirname + 'static/index.html');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'userform.html');
})

io.on('connection', (socket) => { //event handler for a new socket connection
    socket.on('join message', join);

    socket.on("chat message", chatHandler);

    socket.on('disconnect', disconnect);
});

server.listen(3000, () => {
    console.log(`Listening on port 3000`);
})

