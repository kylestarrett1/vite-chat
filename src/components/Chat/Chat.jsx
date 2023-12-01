import ChatWrapper from '../Helpers/Wrapper';
import Sidebar from '../UI/Sidebar';
import ChatMain from '../UI/ChatMain';

const Chat = () => {
  return (
    <ChatWrapper className="w-full h-full relative flex">
      <Sidebar />
      <ChatMain />
    </ChatWrapper>
  );
};

export default Chat;
