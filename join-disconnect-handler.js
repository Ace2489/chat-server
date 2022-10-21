module.exports = (io, people) => {
    const join = function(username) {
        const socket = this;
        people[socket.id] = username;
        socket.broadcast.emit('connection/disconnection message', `Update: ${username} joined the chat. Say hi!`);
    };

    const disconnect = function() {
        io.emit('connection/disconnection message', "Update: " + people[socket.id] + " left the chat!")
    }
    return {join}
} 