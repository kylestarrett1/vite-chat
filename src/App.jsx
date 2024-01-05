import { useEffect, useState } from 'react';
import { AuthContext } from './components/Pages/Register/ContextStore';
import Register from './components/Pages/Register/Register';
import Chat from './Components/Chat/Chat';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {isLoggedIn ? <Chat /> : <Register />}
      </AuthContext.Provider>
    </>
  );
};

export default App;
