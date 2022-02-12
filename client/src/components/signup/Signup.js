import React, { useState, useEffect} from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import validator from "validator";
import "./signup.css";

function Signup({ handleClick }) {
  const strongPassword =
    "Password must contain at least: 8 characters, 1 lowercase, 1 uppercase, 1 number, 1 symbol.";
  const { signup, error } = useAuth();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isStrongPassword, setIsStrongPassword] = useState(strongPassword);
  const [err, setErr] = useState(error);
  const history = useHistory();


  // Check if the password is strong.
  useEffect(() => {
    if (password.length >= 8) {
      if (validator.isStrongPassword(password)) {
        setIsStrongPassword("");
      } else {
        setIsStrongPassword(strongPassword);
      }
    }
  }, [password]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
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
    try{
     const res= await signup(password, email, userName);
      if (res !== undefined) history.push("/categories-page");
      else setErr(error);

    }catch(e){
      setErr(e.message);
    }
  };

  return (
    <div className="login_container">
      <h2>Sign Up</h2>
      {err && <h3>{err}</h3>}
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
          {isStrongPassword && (
              <p className="strong-password_p">{isStrongPassword}</p>
            )}
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
