import { Fragment } from 'react';
import { useEffect } from 'react';
import Login from './components/Login/Login';
import Chat from './Components/Chat/Chat';

const App = () => {
  useEffect(() => {
    document.body.classList.remove('is-preload');

    const preventTouchMove = () => false;
    window.ontouchmove = preventTouchMove;

    const resetScrollOnOrientationChange = () => {
      document.body.scrollTop = 0;
    };
    window.onorientationchange = resetScrollOnOrientationChange;

    return () => {
      window.ontouchmove = null;
      window.onorientationchange = null;
    };
  }, []);

  return (
    <Fragment>
      {/* <Login /> */}
      <Chat />
    </Fragment>
  );
};

export default App;
