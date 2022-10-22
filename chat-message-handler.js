module.exports = (io) => {
    const chatHandler = function(msg) {
        chatMessage = `${msg.message}  ---  from ${msg.username}`
        io.emit('chat message', chatMessage);
    };
    return chatHandler;
} 
