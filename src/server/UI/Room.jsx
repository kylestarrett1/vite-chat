import { useState } from 'react';
import socket from '../socket';

export default function Room() {
  const [room, setRoom] = useState('');

  const joinRoom = () => {
    if (room !== '') {
      socket.emit('join_room', room);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Room number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}>Join Room</button>
    </>
  );
}
