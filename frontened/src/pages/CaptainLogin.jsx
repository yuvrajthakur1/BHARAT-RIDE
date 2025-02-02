import { useState } from "react";
import { Link } from "react-router-dom"


const CaptainLogin = () => {

  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [captainData,setCaptainData] = useState({
       
    });
  
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
        email:email,
        password:password
      })
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


 <button className="pr-4 pt-1 pb-1 pl-4 w-full hover:scale-101 hover:bg-gray-900 bg-[#111] text-white rounded shadow-lg">Login</button>

</form>


<p className="text-center pt-1 pb-1">New Here ? <Link to='/captain-signup' className="text-blue-600">Register As A Captain</Link></p>


      </div>
     {/* IF User Do Not Have Account  */}
      <div>
        <Link to='/login' className=" flex justify-center items-center pr-4 pt-1 pb-1 pl-4 w-full hover:scale-101  bg-[#10b461] text-white rounded shadow-lg mt-4">Sign In As User</Link>
      </div>


    </div>
  )
}

export default CaptainLogin