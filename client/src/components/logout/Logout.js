import React, {useState} from 'react';
import { useAuth } from "../../contexts/AuthContext";


function Logout() {
  const { logout, error, logoutFromAll } = useAuth();

  const hanldeLogout = () =>{
    logout();
  }

  const hanldeLogoutAll = () =>{
    logoutFromAll();
  }

  return <div>
      {error && <div>{error}</div>}
      <button onClick={hanldeLogout}>Log out</button>
      <button onClick={hanldeLogoutAll}>Log out all</button>
  </div>;
}

export default Logout;
