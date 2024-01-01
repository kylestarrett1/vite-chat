import { Fragment } from 'react';

const Login = () => {
  return (
    <Fragment>
      <div id="wrapper">
        <main id="login-form-container">
          <h1>Join</h1>
          <form className="login-form" autoComplete="off">
            <div className="user-box">
              <input type="text" id="username" name="username" required />
              <label htmlFor="username" className="after-label">
                Display name
              </label>
              <span></span>
            </div>
            <div className="user-box">
              <input type="text" id="room" name="room" required />

              <label htmlFor="room" className="after-label">
                Room
              </label>
              <span></span>
            </div>
            <a href="#" className="user-btn">
              <span className="user-btn__span-01 span-btn"></span>
              <span className="user-btn__span-02 span-btn"></span>
              <span className="user-btn__span-03 span-btn"></span>
              <span className="user-btn__span-04 span-btn"></span>
              Join
            </a>
          </form>
        </main>
      </div>
    </Fragment>
  );
};

export default Login;
