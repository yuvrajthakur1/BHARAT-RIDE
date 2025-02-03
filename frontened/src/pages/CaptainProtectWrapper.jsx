import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const CaptainProtectWrapper = ({children}) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const {captain, setCaptain} = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

//Agar Token Exists Nahi Karta to login pe jao
useEffect(() => {  

  let isMounted = true;

  if(!token){
    navigate('/captain-login');
    return;
  }

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (isMounted && response.status === 200) {
        if (response.data.captain) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        } else {
          localStorage.removeItem('token');
          navigate('/captain-login');
        }
      }
    } catch (error) {
      if (isMounted) {
        console.error(error);
        console.log("aho dada catch pakad lele wade");
        setError(error.message);
        localStorage.removeItem('token');
        navigate('/captain-login');
      }
    }
  };

  fetchProfile();

  return () => {
    isMounted = false;
  };
}, [token, navigate, setCaptain]);

   if(isLoading){
      return <div>Loading...</div>
   }

   if(error){
      return <div>Error: {error}</div>
   }

   if(!captain){
      return <div>No captain data found</div>
   }

   return (
     <>
       {children}
     </>
   )
}

export default CaptainProtectWrapper




