import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";
import "./homepage.css";

function HomePage() {
  const [toggle, setToggle] = useState(true);
  const { currentUser } = useAuth();

  //toggled between login and signup 
  const handleToggle = () => {
    setToggle(!toggle);
  };

  console.log("currentUser in homepage", currentUser);

  return (
    <div className="homepage-container">
      <div className="auth-components">
        {!toggle && <Signup handleClick={handleToggle} />}
        {toggle && <Login handleClick={handleToggle} />}
      </div>
    </div>
  );
}

export default HomePage;
