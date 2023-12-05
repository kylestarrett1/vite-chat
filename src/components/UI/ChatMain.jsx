const ChatMain = () => {
  return (
    <div className="chat-main__wrapper">
      <p>Chat Main</p>
      <div className="chat-compose">
        <form>
          <label htmlFor="chat">Message: </label>
          <input
            className="message-input"
            type="text"
            required
            autoComplete="false"
            placeholder="send message..."
          />
        </form>
      </div>
    </div>
  );
};

export default ChatMain;
