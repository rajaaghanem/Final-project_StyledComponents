import React, { useContext, useState, useEffect } from "react";
import { myApi } from "../api/API";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [currentToken, setCurrentToken] = useState();
  const [error, setError] = useState("");

  //convert setItem and getItem to async function
  const asyncLocalStorage = {
    setItem: function (key, value) {
      return Promise.resolve().then(function () {
        localStorage.setItem(key, value);
      });
    },
    getItem: function (key) {
      return Promise.resolve().then(function () {
        return localStorage.getItem(key);
      });
    },
  };

  //handle signup user and add his token from localstorage
  async function signup(password, email, name) {
    setError("");
    let obj = {
      password: password,
      email: email,
      name: name,
    };
    try {
      const response = await myApi().post("/users/signup", obj);

      setCurrentToken(response.data.token);
      setCurrentUser(response.data.user);
      await asyncLocalStorage.setItem("token", response.data.token);
      return response;
    } catch (e) {
      console.table(e);
      setError(e.response.data.message.replace("User validation failed:", ""));
    }
  }

  console.log(error);

  //handle user login and add his token from localstorage
  async function login(email, password) {
    setError("");

    let obj = {
      email: email,
      password: password,
    };

    try {
      const response = await myApi().post("/users/login", obj);

      setCurrentToken(response.data.token);
      setCurrentUser(response.data.user);
      await asyncLocalStorage.setItem("token", response.data.token);

      await asyncLocalStorage.getItem("token");
      return response;
    } catch (e) {
      setError(e.response.data.message);
      console.log(error);
    }
  }

  //handle user logout and remove his token from localstorage
  async function logout() {
    setError("");

    try {
      const response = await myApi(localStorage.getItem("token")).post(
        "/users/logout"
      );
      setCurrentUser(null);
      setCurrentToken(null);
      localStorage.clear();
    } catch (e) {
      setError("Unable to log out");
    }
  }

  // //logout from all user's devices
  // async function logoutFromAll(){
  //   setError("");

  //   try {
  //     const response = await myApi.post("/users/logoutAll");

  //     console.log(response);
  //     localStorage.clear();

  //   } catch (e) {

  //     setError(e.response.data.message);

  //   }
  // }

  //get the current user depends on token
  useEffect(() => {
    // setError("");

    const handleGetUser = async () => {
      try {
        const response = await myApi(localStorage.getItem("token")).get(
          "/users/me"
        );
        setCurrentUser(response.data);
      } catch (e) {
        console.log(e.response);
      }
    };

    handleGetUser();
  }, [currentToken, setCurrentToken, error, setError]);

  console.log("currentUser in auth", currentUser);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    // logoutFromAll,
    currentToken,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
