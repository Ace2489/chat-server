
const randomStr = (n = 10) => [...Array(n)]
    .map(e => String.fromCharCode(~~(Math.random() * 26) + 97))
    .join("");

const socket = io();
const username = prompt('What is your name?') || randomStr();

let messages = document.getElementById('messages');
let form = document.getElementById('form');
let input = document.getElementById('input');

form.addEventListener('input', function () {
});

form.addEventListener('submit', function (e) {//catch user input and emit it as a socket event
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', { message: input.value, username: username });
        input.value = '';
    }
});

socket.emit("join message", username);


socket.on("chat message", function (msg) {
    let item = document.createElement('li');
    item.textContent = msg.message + " --- " + "from " + msg.username;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on("connection/disconnection message", function (msg) {
    let item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
