const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

let board = Array(9).fill("");

io.on('connection', (socket) => {
    socket.emit("updateBoard", board);

    socket.on("playerMove", (index) => {
        board[index] = 'X';
        io.sockets.emit("updateBoard", board);
    });
});

http.listen(3000, () => {
    console.log("Listening on port 3000");
});
