import React from 'react';
import "./navbar.css";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";


function Navbar() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();


  const hanldeLogout = () =>{
    logout();
    history.push("/");
  }

  console.log("currentUser in navbar", currentUser);
  return <div className='navbar-container'>
      <div>components Library</div>
      <div>
          { currentUser && <Link onClick={hanldeLogout}>Log Out</Link>}
          { currentUser && <Link>user profile</Link>}
          
      </div>
  </div>;
}

export default Navbar;
