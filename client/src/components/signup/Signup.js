import React, { useState } from "react";
// import axios from "axios";
// import myApi from "../../api/API";
import { useAuth } from "../../contexts/AuthContext";
import "./signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPssword] = useState("");
  const { signup, error } = useAuth();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPssword(e.target.value);
        break;
      case "name":
        setUserName(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSignup = async () => {
    await signup(password, email, userName);
  };

  return (
    <div className="signup-container">
      <div id="name">
        <label>Enter a name</label>
        <input name="name" onChange={handleChange} value={userName} />
      </div>
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
        <label>Enter a Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </div>

      {/* <div id="password-confirm">
          <label>Password confirmation</label>
          <input type="password"/>
        </div> */}
      <button onClick={handleSignup}>Sign Up</button>
      {error && <div>{error}</div>}
    </div>
  );
}

export default Signup;
