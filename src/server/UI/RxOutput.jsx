import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io('http://localhost:3000');

export default function RxOutput() {
  const [messageReceived, setMessageReceived] = useState('');

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message);
    });
  }, []);

  return (
    <>
      <p>{messageReceived}</p>
    </>
  );
}
