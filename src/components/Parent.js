import React from "react";

const Parent = ({ setIsLoggedIn }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Parent Component</h1>
      <span>
        <label htmlFor="username">Username:</label>
        <input required type="text" name="username" id="username" />
      </span>
      <span>
        <label htmlFor="password">Password:</label>
        <input required type="password" name="passowrd" id="password" />
      </span>
      <span>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </span>
    </form>
  );
};

export default Parent;
