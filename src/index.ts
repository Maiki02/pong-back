import express = require('express');
const SocketIO= require('socket.io');
const morgan= require('morgan');
const cors= require('cors');
import { router as playersRoutes } from './routes/players.routes';
const app:express.Application = express();

// Settings
app.set('port', 3000);

// Middlewares
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));

// Routes
app.use(playersRoutes)

// Starting the server
const server=app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

//Websocket
const io = SocketIO(server, {cors: {origin: '*'}});
io.on('connection', (socket: any) => {
    console.log('New connection', socket.id);
    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id);
    });
    socket.on('message', (data: any) => {
        console.log(data);
        io.sockets.emit('message', data);
    });
});