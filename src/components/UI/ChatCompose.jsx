import { Fragment } from 'react';

const ChatCompose = () => {
  return (
    <Fragment>
      <form id="message-form">
        <input
          name="message"
          type="text"
          placeholder="Message"
          required
          autoComplete="off"
        />
        <button>Send</button>
      </form>
    </Fragment>
  );
};

export default ChatCompose;
