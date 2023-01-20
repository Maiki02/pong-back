"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const SocketIO = require('socket.io');
const morgan = require('morgan');
const cors = require('cors');
const players_routes_1 = require("./routes/players.routes");
const app = express();
// Settings
app.set('port', 3000);
// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// Routes
app.use(players_routes_1.router);
// Starting the server
const server = app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
//Websocket
const io = SocketIO(server, { cors: { origin: '*' } });
io.on('connection', (socket) => {
    console.log('New connection', socket.id);
    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });
    socket.on('message', (data) => {
        console.log(data);
        io.sockets.emit('message', data);
    });
});
