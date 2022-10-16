const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);


let people = {};
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'userform.html');
})

io.on('connection', (socket) => { //event handler for a new socket connection
    let name; //declare the name variable for holding the username later
    socket.on('join message', (username) => {
        name = username;
        people[socket.id] = name;
        socket.broadcast.emit('connection/disconnection message', `Update: ${username} joined the chat. Say hi!`);
    })

    socket.on("chat message", (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        io.emit('connection/disconnection message', "Update: " + name + " left the chat!")
    });
});

server.listen(3000, () => {
    console.log(`Listening on port 3000`);
})

