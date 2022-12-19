import React, { useState } from "react";
import { ModalDialog } from "react-bootstrap";
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Username/Email</label>
          <input
            value={email}
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="Enter your Email Id"
          />
          <br />

          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="*********"
          />

          <button type="submit">Login</button>
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("register")}
          >
            Don't have any account?, Click here to Register
          </button>
        </form>
      </div>
    </>
  );
};

const checkTestFunction1 = (props) => {
  props.setEmail = "ishvinder133@gmail.com";
  props.setPassword = "ishviner";
};

module.export = checkTestFunction1;
