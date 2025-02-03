import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";




const CaptainSignUp = () => {

     const navigate = useNavigate();  
  
      const [firstname,setFirstName] = useState('');
      const [lastname,setLastName] = useState('');
      const [password,setPassword] = useState('');
      const [email,setEmail] = useState('');
      const [vehicleType, setVehicleType] = useState('');
      const [vehiclePlate, setVehiclePlate] = useState('');
      const [vehicleCapacity, setVehicleCapacity] = useState('');
      const [vehicleColor, setVehicleColor] = useState('');




      const {captain,setCaptain} = useContext(CaptainDataContext);

      const submitHandler =async (e) => {

        e.preventDefault();
       const captainData= {
          fullname:{
            firstname,
            lastname
          },
          email,
          password,
         vehicle:{
            vehicleType:vehicleType,
            plate:vehiclePlate,
            capacity:vehicleCapacity,
            color:vehicleColor
         }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainData);

        if(response.status === 201){
          const data = response.data; 
          setCaptain(data.captain);
          localStorage.setItem('token',data.token);
          navigate('/captain-home')
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setVehicleType('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleColor('');

        
       }
        
     


  return (
    <div className="px-6 py-4 h-screen flex flex-col justify-between ">

    {/* Form Section Starts from Here */}
        <div>
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


                  <h3 className="text-base mb-2 font-bold">Vehicle Details</h3>
                  
                  <div className="flex gap-4 flex-wrap ">
                  <select
                    className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border flex-1 min-w-[150px] border-gray-300  text-base"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    required
                  >
                    <option value="">Select Vehicle Type</option>
                    <option value="car">Car</option>
                    <option value="auto">Auto</option>
                    <option value="motorcycle">Motorcycle</option>
                  </select>

                  <input 
                    className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300  flex-1 min-w-[150px] text-base"
                    value={vehiclePlate}
                    onChange={(e) => setVehiclePlate(e.target.value)}
                    type="text"
                    required
                    placeholder="Vehicle Plate Number"
                  />

                  <input 
                    className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300  flex-1 min-w-[150px] text-base"
                    value={vehicleCapacity}
                    onChange={(e) => setVehicleCapacity(e.target.value)}
                    type="number"
                    required
                    placeholder="Vehicle Capacity"
                  />

                  <input 
                    className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 flex-1 min-w-[150px]text-base"
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                    type="text"
                    required
                    placeholder="Vehicle Color"
                  />
                  </div>
  
                <h3 className="text-base mb-2 font-bold">Enter Your Password</h3>
                  <input 
                   className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full text-base placeholder:text-base"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   type="password" 
                   required 
                   placeholder="password"
                   />
  
  
                  <button className="pr-4 pt-1 pb-1 pl-4 w-full hover:scale-101 hover:bg-gray-900 bg-[#111] text-white rounded shadow-lg">Create Captain Account</button>
  
              </form>
  
  
                <p className="text-center pt-1 pb-1">Already Have Account? <Link to='/captain-login' className="text-blue-600">Login As Captain</Link></p>
  
  
        </div>

       {/* If You Are Captain*/}
        <div>
        <p className="text-xs leading-tight text-center">
        Your privacy is important to us. It is Bharat Ride&apos;s policy to respect your privacy regarding any operate.
        </p>
        </div>
  
  
      </div>
  )
}

export default CaptainSignUp