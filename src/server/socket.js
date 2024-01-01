import { io } from 'socket.io-client';

const URL = 'http://localhost:3000';

const socket = io(URL);

socket.on('connect_error', (err) => {
  console.log(`Connection Error: ${err.message}`);
});

socket.on('connect_timeout', () => {
  console.log('Connection Timeout');
});

export default socket;
