import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";


const UserLogin = () => {
  // Data Logic Goes Here For 

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  // const [userData,setUserData] = useState({});


  const {user,setUser} = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email:email,
      password:password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData); 

    if(response.status === 200){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home');
    }
    setEmail('');
    setPassword('');
  }




  return (
    <div className="px-6 py-4 h-screen flex flex-col justify-between ">

      

  {/* Form Section Starts from Here */}
      <div>
         <img src="/Bharat.png"  className="ml-1 w-48"  alt="Image" />

           <form onSubmit={submitHandler}>
              <h3 className="text-lg mb-2 font-medium">What&apos;s your email</h3>
                <input 
                 className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full placeholder:text-base"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 type="email" 
 required
 placeholder="Email" 
 />

 <h3 className="text-xl mb-2 font-semibold">Enter Your Password</h3>
 <input 
 className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full placeholder:text-base"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 type="password" 
 required 
 placeholder="password"
  />


 <button className="pr-4 pt-1 pb-1 text-base pl-4 w-full hover:scale-101 hover:bg-gray-900 bg-[#111] text-white rounded shadow-lg">Login</button>

</form>


<p className="text-center text-sm pt-1 pb-1">New Here ? <Link to='/signup' className="text-blue-600">Register As A User </Link></p>


    </div>
     {/* IF User Do Not Have Account  */}
      <div>
        <Link to='/captain-login' className=" flex justify-center items-center pr-4 pt-1 pb-1 pl-4 w-full hover:scale-101  bg-[#10b461] text-white rounded shadow-lg text-base mt-4">Sign In As Captain</Link>
      </div>


    </div>
  )
}

export default UserLogin