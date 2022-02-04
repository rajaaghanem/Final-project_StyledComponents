import React, { useContext, useState, useEffect } from "react";
import myApi from "../api/API";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [currentToken, setCurrentToken] = useState();
  const [error, setError] = useState("");

  //handle signup user and add his token from localstorage
  async function signup(password, email, name) {
    setError("");
    let obj = {
      password: password,
      email: email,
      name: name,
    };
    try {
      const response = await myApi.post("/users/signup", obj);

      setCurrentToken(response.data.token);
      setCurrentUser(response.data.user);
      localStorage.setItem('token', response.data.token);

    } catch (e) {
      // console.table(e);

      setError(e.response.data.message.replace("User validation failed:", ""));
      console.log(error);
    }
  }

  //handle user login and add his token from localstorage
  async function login(email, password) {
    setError("");

    let obj = {
      email: email,
      password: password,
    };

    try {
      const response = await myApi.post("/users/login", obj);

      setCurrentToken(response.data.token);
      setCurrentUser(response.data.user);
      localStorage.setItem('token', response.data.token);

    } catch (e) {

      setError(e.response.data.message);
      console.log(error);
      
    }
  }

  console.log(currentToken);

  //handle user logout and remove his token from localstorage
  async function logout() {
    setError("");

    try {
      const response = await myApi.post("/users/logout");

      console.log(response);
      localStorage.clear();

    } catch (e) {

      setError(e.response.data.message);
      
    }

  }

  //logout from all user's devices
  async function logoutFromAll(){
    setError("");

    try {
      const response = await myApi.post("/users/logoutAll");

      console.log(response);
      localStorage.clear();

    } catch (e) {

      setError(e.response.data.message);
      
    }
  }

  console.log(error);


  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //   });
  //   return unsubscribe;
  // }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    logoutFromAll,
    currentToken,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
