import { useState } from 'react';

import Signup from './Signup';
import Login from './Login';

export default function Register() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleFormView = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <>
      {isLoginForm ? (
        <Login onToggle={toggleFormView} />
      ) : (
        <Signup onToggle={toggleFormView} />
      )}
    </>
  );
}
