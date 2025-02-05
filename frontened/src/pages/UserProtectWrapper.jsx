import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const UserProtectWrapper = ({children}) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const clearAuthAndRedirect = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    if(!token){
      clearAuthAndRedirect();
      return;
    }

    let isMounted = true;

    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        if (isMounted) {
          if (response.status === 200) {
            setUser(response.data);
            setIsLoading(false);
          } else {
            clearAuthAndRedirect();
          }
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
          setError(error.message);
          clearAuthAndRedirect();
        }
      }
    };

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, [navigate, token, setUser]);

   if(isLoading){
    return <div>Loading...</div>
 }

 if(error){
    return <div>Error: {error}</div>
 }

 if(!user){
    navigate('/login');
    return null;
 }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper





