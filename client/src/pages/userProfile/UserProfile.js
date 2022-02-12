import React, {useEffect, useState} from 'react';
import {myApi} from "../../api/API";
import "./userProfile.css";
import { useHistory } from "react-router-dom";
import Spinner from '../../components/spinner/Spinner';

function UserProfile({setUserComponent}) {
  const [userComponents, setUserComponents] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  
  //get logged in user components
  useEffect(() => {
    setIsLoading(true);
    const handleGetAllUserComponents = async () => {
      try {
        const response = await myApi(localStorage.getItem('token')).get("/savedcomponents");
        console.log("all components: ", response.data);
        setUserComponents(response.data);
        setIsLoading(false);
      } catch (e) {
        setError(e.response.data.message);
        console.log(error);
      }
    };

    handleGetAllUserComponents();

  }, []);


  //handle setuserComponent to component and push history `/userButtonsGenerate-page`
  const handleClick=(chosenComponent)=>{
    setUserComponent(chosenComponent);
    history.push(`/userButtonsGenerate-page`);
  }

  //maping over the user components and creats divs for each
  const componentsMap = ()=>{
    return userComponents.map((chosenComponent)=>{
      return <button onClick={()=>handleClick(chosenComponent)} className='user-component_card' key={chosenComponent._id}><div className='user-component_title'>{chosenComponent.name}</div></button>
    })
  }


  return <div><div className='user-components_container'>
    {isLoading && <Spinner/>}
    {componentsMap()}
    </div></div>;
}

export default UserProfile;
