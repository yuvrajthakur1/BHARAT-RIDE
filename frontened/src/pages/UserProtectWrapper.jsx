// import React from 'react'

// import { useContext } from "react"
// import { UserDataContext } from "../context/UserContext"
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  {UserDataContext} from '../context/UserContext';
import axios from 'axios';



// eslint-disable-next-line react/prop-types
const UserProtectWrapper = ({children}) => {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //Agar Token Exists Nahi Karta to login pe jao
 
  useEffect(() => {  
     
      let isMounted = true;

      if(!token){
        navigate('/login');
        return;
      }
    

      const fetchProfile = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          
          if (isMounted && response.status === 200) {
            if (response.data.captain) {
              setUser(response.data.user);
              setIsLoading(false);
            } else {
              localStorage.removeItem('token');
              navigate('/login');
            }
          }
        } catch (error) {
          if (isMounted) {
            console.error(error);
            console.log("aho dada catch pakad lele wade");
            setError(error.message);
            localStorage.removeItem('token');
            navigate('/login');
          }
        }
      };

      fetchProfile();

      return () => {
        isMounted = false;
      };
    

   }, [navigate, token,setUser])

   if(isLoading){
    return <div>Loading...</div>
 }

 if(error){
    return <div>Error: {error}</div>
 }

 if(!user){
    return <div>No captain data found</div>
 }

  return (
   <>
    {children}
   </>
  )
}

export default UserProtectWrapper






