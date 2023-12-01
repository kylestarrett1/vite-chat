import { Fragment } from 'react';

const Login = () => {
  return (
    <Fragment>
      <div
        id="wrapper"
        className="min-h-screen flex justify-center items-center bg-gradient-to-t from-bg-light to-bg-dark"
      >
        <main
          id="centered-form__container"
          className="max-w-sm w-full p-6 flex flex-col justify-center items-start font-poppins bg-fg text-white rounded-lg shadow-3xl"
        >
          <h1 className="text-2xl tracking-widest self-center mb-4 font-medium">
            Join
          </h1>
          <form className="w-full" action="/chat.html" autoComplete="off">
            <div className="user-box flex flex-col relative">
              <input
                type="text"
                id="username"
                name="username"
                className="w-full absolute left-0 top-0 text-sm bg-fg rounded-lg px-3 py-2 focus:outline-none"
                required
              />
              <label
                htmlFor="username"
                className="absolute top-0 left-0 text-sm px-3 py-2 after-label"
              >
                Display name
              </label>
              <span className="absolute left-0 right-0 bottom-0 h-1 ml-3 bg-white w-full"></span>
            </div>
            <div className="user-box flex flex-col relative">
              <input
                type="text"
                id="room"
                name="room"
                className="w-full absolute left-0 top-0 text-sm bg-fg rounded-lg px-3 py-2 focus:outline-none"
                required
              />

              <label
                htmlFor="room"
                className="absolute top-0 left-0 text-sm px-3 py-2 after-label"
              >
                Room
              </label>
              <span className="absolute left-0 right-0 bottom-0 h-1 ml-3 bg-white w-full"></span>
            </div>
            <a
              href="#"
              className="user-btn relative tracking-widest uppercase overflow-hidden w-1/4 flex justify-center align-center mt-12 mb-6 ml-3 px-12 py-2 bg-none text-text-light font-medium"
            >
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
