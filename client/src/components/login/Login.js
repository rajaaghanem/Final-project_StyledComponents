import React, { useState } from "react";
// import myApi from "../../api/API";
import "./login.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Login({handleClick}) {
  const [email, setEmail] = useState("");
  const [password, setPssword] = useState("");
  //   const [error, setError] = useState("");
  const { login, error } = useAuth();
  const history = useHistory();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPssword(e.target.value);
        break;
      default:
        break;
    }
  };

  //handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    history.push("/categories-page");
  };

  return (
    <div className="login_container">
      <h2>Log in</h2>
      {error && <h3>{error}</h3>}
      <form className="login-form_container" onSubmit={handleLogin}>
      <div id="email">
        <label>Enter your Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div id="password">
        <label>Enter your Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </div>
      <div className="login-form-btn">
        <button  type="submit" onClick={handleLogin}>Log In</button>{" "}
      </div>
      </form>
      <p className="login-form-p">
        Need an account?{" "}
        <button className="homepage--btn" onClick={handleClick}>
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default Login;
