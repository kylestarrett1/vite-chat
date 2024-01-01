import TxInput from '../../server/UI/TxInput';
import RxOutput from '../../server/UI/RxOutput';
import Room from '../../server/UI/Room';

const ChatMain = () => {
  return (
    <div className="chat-main__wrapper">
      <p>Chat Main</p>
      <RxOutput />
      {/* <p>{messageReceived}</p> */}
      <div className="chat-compose">
        <form>
          <label htmlFor="chat">Message: </label>
          <TxInput />
          <label htmlFor="room">Room: </label>
          <Room />
        </form>
      </div>
    </div>
  );
};

export default ChatMain;
