import { useState } from 'react';

export default function Signup({ onToggle }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.text();
        } else {
          throw new Error('User already exists');
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
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
                id="username"
                name="username"
                onChange={handleInputChange}
                autoComplete="off"
                required
              />
              <label htmlFor="username" className="after-label">
                Username
              </label>
              <span></span>
            </div>
            <div className="user-box">
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleInputChange}
                autoComplete="off"
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
              <span className="user-btn-text signup">Join</span>
            </button>
            <p className="login-text">
              Already have an account?{' '}
              <a href="#" className="login-link" onClick={onToggle}>
                Log in
              </a>
            </p>
          </form>
        </main>
        {errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : !errorMessage && formSubmitted ? (
          <div>
            <h2 className="signup-confirmation">Success</h2>
          </div>
        ) : null}
      </div>
    </>
  );
}
