import socket from '../../server/socket';
import { useState } from 'react';

export default function TxInput() {
  const [message, setMessage] = useState('');

  const sendMessage = (event) => {
    if (event.key === 'Enter') {
      socket.emit('send_message', { message });
      event.target.value = '';
      event.preventDefault();
    }
  };

  return (
    <>
      <input
        className="message-input"
        placeholder="send message..."
        autoComplete="false"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        // onKeyDown={sendMessage}
        onKeyDown={sendMessage}
        formNoValidate
        required
      />
    </>
  );
}
