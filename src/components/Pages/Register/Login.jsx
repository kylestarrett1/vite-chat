import { useEffect, useState, useRef, useContext } from 'react';
import { AuthContext } from './ContextStore';

export default function Login({ onToggle }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200) {
          setIsLoggedIn(true);
          return response.text();
        } else {
          throw new Error('The username or password is incorrect');
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });

    setFormSubmitted(true);
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    console.log('Current value of isLoggedIn:', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <div id="wrapper">
        <main id="signup-form-container">
          <h1>
            <span>L</span>okken
          </h1>
          <form
            className="signup-form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="user-box">
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleInputChange}
                autoComplete="off"
                ref={emailRef}
                required
              />
              <label htmlFor="email" className="after-label">
                Email
              </label>
              <span></span>
            </div>
            <div className="user-box">
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleInputChange}
                autoComplete="off"
                ref={passwordRef}
                required
              />
              <label htmlFor="password" className="after-label">
                Password
              </label>
              <span></span>
            </div>
            <button className="user-btn" type="submit">
              <span className="user-btn__span-01 span-btn"></span>
              <span className="user-btn__span-02 span-btn"></span>
              <span className="user-btn__span-03 span-btn"></span>
              <span className="user-btn__span-04 span-btn"></span>
              <span className="user-btn-text login">Login</span>
            </button>
            <p className="login-text">
              Need to Join?{' '}
              <a href="#" className="login-link" onClick={onToggle}>
                Join
              </a>
            </p>
          </form>
        </main>
        {formSubmitted && !errorMessage ? (
          <div>
            <h2 className="signup-confirmation">Successfully Logged In...</h2>
          </div>
        ) : (
          <p className="error-message">{errorMessage}</p>
        )}
      </div>
    </>
  );
}
