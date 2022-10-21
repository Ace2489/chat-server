module.exports = (io, people) => {
    const join = function(username) {
        const socket = this;
        name = username;
        people[socket.id] = name;
        socket.broadcast.emit('connection/disconnection message', `Update: ${name} joined the chat. Say hi!`);
    };

    return {join}
} 