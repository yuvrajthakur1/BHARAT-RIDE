import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import {UserDataContext} from "../context/UserContext";
import axios from 'axios';


const UserSignUp = () => {

    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
 // const [userData,setUserData] = useState({});
   
   const navigate = useNavigate();

   const  {user,setUser} = useContext(UserDataContext);

  //  Form Handler
     const submitHandler = async  (e) => {
        e.preventDefault();
        const newUser={
          fullname:{
           firstname:firstname,
           lastname:lastname  
          },
          email:email,
          password:password
        }


        //sending form data to backend using Axios

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

        if(response.status === 201){
          const data = response.data;
          setUser(data.user);
          localStorage.setItem('token',data.token);
          navigate('/home');
        }

         

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
     }
   


     
     







  return (

     <div className="flex items-center justify-center">
       <div className="px-6 py-7 w-96 h-screen  flex flex-col  justify-between ">

{/* Form Section Starts from Here */}
   <div className="border border-gray-300 p-2 rounded">
      <img src="/Bharat.png"  className="ml-1 w-48 "  alt="Image" />
        <form onSubmit={submitHandler}>
           <h3 className="text-base mb-2 font-bold">What&apos;s Your Name</h3>
            <div className="flex gap-2">
             <input 
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full  placeholder:text-base"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              type="text" 
              required
              placeholder="First Name" 
              />
              <input 
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full placeholder:text-base"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              type="text" 
              required
              placeholder="Last Name" 
              />
            </div>

            <h3 className="text-base mb-2 font-bold">Enter Your Email</h3>
             <input 
              className="bg-[#eeeeee] mb-7 text-base rounded px-4 py-2 border border-gray-300 w-full placeholder:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email" 
              required 
              placeholder="Enter Your Email"
              />

           <h3 className="text-base mb-2 font-bold">Enter Your Password</h3>
             <input 
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full text-base placeholder:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password" 
              required 
              placeholder="password"
              />


             <button className="pr-4 pt-1 pb-1 pl-4 w-full hover:scale-101 hover:bg-gray-900 bg-[#111] text-white rounded shadow-lg">Sign Up/Create Account</button>

         </form>


           <p className="text-center text-sm pt-1 pb-1">Already Have Account? <Link to='/login' className="text-blue-600">Login As User </Link></p>


   </div>


  {/* If You Are Captain*/}
   <div>
   <p className="text-xs leading-tight text-center">
   Your privacy is important to us. It is Bharat Ride&apos;s policy to respect your privacy regarding any information we may collect from you across our website.
   </p>
   </div>


 </div>
     </div>
  )
}

export default UserSignUp





