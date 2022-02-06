import React, { useState } from "react";
// import axios from "axios";
// import myApi from "../../api/API";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./signup.css";

function Signup({ handleClick }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPssword] = useState("");
  const { signup, error } = useAuth();
  const history = useHistory();

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

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(password, email, userName);
    history.push("/categories-page");
  };

  return (
    <div className="login_container">
      <h2>Sign Up</h2>
      {error && <h3>{error}</h3>}
      <form className="login-form_container" onSubmit={handleSignup}>
        <div id="name">
          <label>Enter your name</label>
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
          <label>Enter your Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="login-form-btn">
          <button type="submit" onClick={handleSignup}>
          Sign Up
          </button>{" "}
        </div>
      </form>
      <p className="login-form-p">
        Already have an account?{" "}
        <button className="homepage--btn" onClick={handleClick}>
          Log In
        </button>
      </p>
    </div>
    // <div className="signup-container">
    //   <h2>Sign Up</h2>
    //   {error && <h3>{error}</h3>}
    //   <form className="login-form_container" onSubmit={handleLogin}>
    //   <div id="name">
    //     <label>Enter a name</label>
    //     <input name="name" onChange={handleChange} value={userName} />
    //   </div>
    //   <div id="email">
    //     <label>Enter your Email</label>
    //     <input
    //       type="email"
    //       name="email"
    //       onChange={handleChange}
    //       value={email}
    //     />
    //   </div>
    //   <div id="password">
    //     <label>Enter a Password</label>
    //     <input
    //       type="password"
    //       name="password"
    //       onChange={handleChange}
    //       value={password}
    //     />
    //   </div>

    //   {/* <div id="password-confirm">
    //       <label>Password confirmation</label>
    //       <input type="password"/>
    //     </div> */}
    //   <button onClick={handleSignup}>Sign Up</button>
    //   {error && <div>{error}</div>}
    // </div>
  );
}

export default Signup;
