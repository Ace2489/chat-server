module.exports = (io) => {
    const join = function(username) {
        people[socket.id] = username;
        socket.broadcast.emit('connection/disconnection message', `Update: ${username} joined the chat. Say hi!`);
    })
} 