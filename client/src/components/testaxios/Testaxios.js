import React, { useState } from "react";
import myApi from "../../api/API";
// import { useAuth } from "../../contexts/AuthContext";

function Testaxios() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [component, setComponent] = useState("");
  const [allcomponents, setAllComponents] = useState([]);
  const [globalComponents, setGlobalComponents] = useState([]);
  const [componantById, setComponantById] = useState([]);
  const [updateComponantById, setUpdateComponantById] = useState([]);



  //get logged in user
  const handleGetUser = async () => {
    try {
      const response = await myApi.get("/users/me");
      console.log("user", response);
      setUser(response.data);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  //update user fields
  const handleUpdateUser = async () => {
    const obj = {
      name: "change-name",
    };
    try {
      const response = await myApi.patch("/users/me", obj);
      console.log("user", response);
      setUser(response.data);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  //delete user
  const handleDeleteUser = async () => {
    try {
      const response = await myApi.delete("/users/me");
      console.log("user", response);
      setUser(response.data);
      localStorage.clear();
    } catch (e) {
      console.table(e);
      setError(e.response.data.message);
    }
  };

  //add new component to the user collection
  const handleAddComponent = async () => {
    const obj = {
      name: "green card",
      styledComponent: "styled component",
      jsComponent: "js component",
      cssComponent: "css component",
      global: false,
      category: "Cards",
    };
    try {
      const response = await myApi.post("/savedcomponents", obj);
      console.log("component: ", response);
      setComponent(response.data);
    } catch (e) {
      // console.table(e);
      setError(e.response.data.message);
    }
  };

  //Get all user saved components
  const handleGetAllUserComponents = async () => {
    try {
      const response = await myApi.get("/savedcomponents");
      console.log("all components: ", response.data);
      setAllComponents(response.data);
    } catch (e) {
      // console.table(e);
      setError(e.response.data.message);
    }
  };

  //get all global components by category
  const handleGetGlobalByCategory = async () => {
    const category = "Cards";

    try {
      const response = await myApi.get(
        `/savedcomponents/globalbycategory/${category}`
      );

      console.log("global components: ", response);
      setGlobalComponents(response.data);
    } catch (e) {
      // console.table(e);
      setError(e.response.data.message);
    }
  };

  //get component by id 
  const handleComponentById = async () => {
    
     const id = '61fd0364f1b74b866985eeea'
    
    try {
      const response = await myApi.get(
        `/savedcomponents/find/${id}`
      );

      console.log("component by id: ", response);
      setComponantById(response.data);

    } catch (e) {

      // console.table(e);
      setError(e.response.data.message);
    }

  };

  //update component by id
  const handleUpdateComponentById = async () =>{
    const id = '61fd0364f1b74b866985eeea'
    const obj = {
      name: "change-name",
      styledComponent: "change change"
    }
    
    try {
      const response = await myApi.patch(
        `/savedcomponents/${id}`, obj
      );

      console.log("update component by id: ", response);
      setUpdateComponantById(response.data);

    } catch (e) {

      // console.table(e);
      setError(e.response.data.message);
    }
  }

  //delete component by id
  const handleDeleteComponentById = async () =>{
    const id = '61fd0364f1b74b866985eeea'
    
    try {
      const response = await myApi.delete(
        `/savedcomponents/${id}`
      );

      console.log("update component by id: ", response);
      setUpdateComponantById(response.data);

    } catch (e) {

      // console.table(e);
      setError(e.response.data.message);
    }
  }


  console.log("state user :", user);
  console.log("user components: ", allcomponents);
  console.log("update component by id: ", updateComponantById);

  return (
    <div>
      {error && <div>{error}</div>}
      <button onClick={handleGetUser}>get user</button>
      <button onClick={handleUpdateUser}>update user</button>
      <button onClick={handleDeleteUser}>delete user</button>
      <button onClick={handleAddComponent}>add new component</button>
      <button onClick={handleGetAllUserComponents}>
        get all user components
      </button>
      <button onClick={handleGetGlobalByCategory}>
        get global by category
      </button>
      <button onClick={handleComponentById}>get component by id</button>
      <button onClick={handleUpdateComponentById}>update component by id</button>
      <button onClick={handleDeleteComponentById}>delete component by id</button>

    </div>
  );
}

export default Testaxios;
