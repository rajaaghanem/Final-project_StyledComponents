import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {myApi} from "../../api/API";
import "./userProfile.css";

function UserProfile() {
  const [userComponents, setUserComponents] = useState([]);
  const [error, setError] = useState("");
  
  //get logged in user components
  useEffect(() => {
    const handleGetAllUserComponents = async () => {
      try {
        const response = await myApi(localStorage.getItem('token')).get("/savedcomponents");
        console.log("all components: ", response.data);
        setUserComponents(response.data);
      } catch (e) {
        setError(e.response.data.message);
        console.log(error);
      }
    };

    handleGetAllUserComponents();

  }, []);

  //maping over the user components and creats divs for each
  const componentsMap = ()=>{
    return userComponents.map((component)=>{
      return <Link to={`/userButtonsGenerate-page/${component._id}/${component.category}/`} className='user-component_card' key={component._id}><div className='user-component_title'>{component.name}</div></Link>
    })
  }

  console.log(userComponents);

  return <div><div className='user-components_container'>
    {componentsMap()}
    </div></div>;
}

export default UserProfile;
