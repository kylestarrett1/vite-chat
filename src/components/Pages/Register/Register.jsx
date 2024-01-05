import { useState } from 'react';
import { SignupContext } from './ContextStore';

import Signup from './Signup';
import Login from './Login';

export default function Register() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isSignedUp, setIsSignedUp] = useState(false);

  const toggleFormView = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <>
      <SignupContext.Provider
        value={{ isSignedUp, setIsSignedUp, isLoginForm, setIsLoginForm }}
      >
        {isLoginForm ? (
          <Login onToggle={toggleFormView} />
        ) : (
          <Signup onToggle={toggleFormView} />
        )}
      </SignupContext.Provider>
    </>
  );
}
