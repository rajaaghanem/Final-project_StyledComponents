import React, { useState } from "react";
// import myApi from "../../api/API";
import "./login.css";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPssword] = useState("");
  //   const [error, setError] = useState("");
  const { login, error } = useAuth();

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
  const handleLogin = async () => {
    await login(email, password);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      <div className="login-container">
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
        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
}

export default Login;
