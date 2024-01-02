import { useState } from 'react';

const Login = () => {
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
      {formSubmitted && !errorMessage ? (
        <div>
          <h2 className="signup-confirmation">Success</h2>
        </div>
      ) : (
        <div id="wrapper">
          {/* {errorMessage && <p>{errorMessage}</p>} */}
          <main id="login-form-container">
            <h1>Join</h1>
            <form
              className="login-form"
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
                <span>Join</span>
              </button>
            </form>
          </main>
        </div>
      )}
    </>
  );
};

export default Login;
