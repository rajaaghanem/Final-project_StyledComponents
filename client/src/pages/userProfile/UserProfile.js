import React, {useEffect, useState} from 'react';
import {myApi} from "../../api/API";
import "./userProfile.css";
import { useHistory } from "react-router-dom";

function UserProfile({setUserComponent}) {
  const [userComponents, setUserComponents] = useState([]);
  const [error, setError] = useState("");
  const history = useHistory();
  
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


  //handle setuserComponent to component and push history `/userButtonsGenerate-page`
  const handleClick=(component)=>{
    setUserComponent(component);
    history.push(`/userButtonsGenerate-page`);
  }

  //maping over the user components and creats divs for each
  const componentsMap = ()=>{
    return userComponents.map((component)=>{
      return <button onClick={()=>handleClick(component)} className='user-component_card' key={component._id}><div className='user-component_title'>{component.name}</div></button>
    })
  }


  return <div><div className='user-components_container'>
    {componentsMap()}
    </div></div>;
}

export default UserProfile;
