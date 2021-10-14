import React, { useState, useEffect } from "react";

import Greeter from "../components/Greeter";

document.body.style.backgroundColor = "#f8f9fa";

const App = () => {
  const [userName, setUserName] = useState("");
  const [loaded, loadingState] = useState(false);

  useEffect(() => {
    setInterval(() => {
      loadingState(true);
    }, 3000);
  }, [loaded]);

  if (!loaded) {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h2 className="loading-header text-center mt-5">Website loading...</h2>
        <button
          className="mt-3 px-5 py-3 btn btn-lg btn-primary"
          onClick={() => {
            return loadingState(true);
          }}
        >
          Click me to load!
        </button>
      </div>
    );
  }

  const handleInput = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };

  return (
    <div className="container">
      <Greeter phrase="Hey there," name="Lauren" />
      <Greeter phrase="Yo," name="Eric" />
      <Greeter phrase="What's up," name="Marshall" />

      <input
        className="form-control w-50 mt-5"
        type="text"
        onChange={handleInput}
        value={userName}
      />
      <p className="output mt-3">
        Logging in with username:{" "}
        <span className="text-primary">{userName}</span>
      </p>
    </div>
  );
};

export default App;
