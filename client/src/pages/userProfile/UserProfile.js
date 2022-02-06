import React, {useEffect, useState} from 'react';
import myApi from "../../api/API";

function UserProfile() {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");

  //get logged in user
  useEffect(() => {
  const handleGetUser = async () => {
    try {
      const response = await myApi.get("/users/me");
      console.log("user", response);
      setCurrentUser(response.data);
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  handleGetUser();

  }, []);
  
  // console.log(currentUser);
  // console.log(error);

  return <div>user profile</div>;
}

export default UserProfile;
