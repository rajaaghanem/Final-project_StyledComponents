import React from "react";
import "./navbar.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const hanldeLogout = () => {
    logout();
    history.push("/");
  };

  console.log("currentUser in navbar", currentUser);
  return (
    <div className="navbar-container">
      <Link to="/welcome-page">
        <div>components Library</div>
      </Link>
      <div>
        {currentUser && <Link to="/categories-page">Categories</Link>}
        {currentUser && (
          <Link to="/" onClick={hanldeLogout}>
            Log Out
          </Link>
        )}
        {currentUser && <Link to="/user-profile">Profile</Link>}
      </div>
    </div>
  );
}

export default Navbar;
