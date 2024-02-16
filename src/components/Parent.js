import React from "react";

const Parent = ({ setIsLoggedIn }) => {
  return (
    <section>
      <span>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" />
      </span>
      <span>
        <label htmlFor="password">Password:</label>
        <input type="password" name="passowrd" id="password" />
      </span>
      <span>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </span>
    </section>
  );
};

export default Parent;
