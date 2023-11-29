import { Fragment } from 'react';

const App = () => {
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
          <h1 className="text-2xl self-center mb-4 font-medium">Join</h1>
          <form className="w-full" action="/chat.html">
            <div className="relative mb-4">
              <input
                type="text"
                id="username"
                name="username"
                className="w-full inline text-sm bg-fg rounded-lg px-3 py-2 border-b-4 border-white focus:outline-none"
                required
              />
              <label
                htmlFor="username"
                className="w-full inline absolute top-0 left-0 text-sm px-3 py-2 mb-1"
              >
                Display name
              </label>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                id="room"
                name="room"
                className="w-full inline text-sm bg-fg rounded-lg px-3 py-2 border-b-4 border-white focus:outline-none"
                required
              />

              <label
                htmlFor="room"
                className="w-full inline absolute top-0 left-0 text-sm px-3 py-2 mb-1"
              >
                Room
              </label>
            </div>
            <button
              type="submit"
              className="w-1/4 bg-none text-white font-medium py-2 rounded-lg"
            >
              Join
            </button>
          </form>
        </main>
      </div>
    </Fragment>
  );
};

export default App;
