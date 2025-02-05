/* eslint-disable react/prop-types */
// import React from 'react'
import { Link } from 'react-router-dom';

const  userImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgeFPHGTtBpqOyhMdENjo9TmVTKPt7nctiQ&s";

const FinishRide = (props) => {

  
  return (
    <div>
      <i
        className="ri-arrow-down-wide-line font-bold text-2xl absolute right-1"
        onClick={()=>{
          props.setFinishRidePanel(false);
        }
        }
      />

      <h3 className="text-2xl font-semibold mb-7">Finish This</h3>

      <div className='flex items-center justify-between p-4 -mb-5 bg-gray-200 rounded-2xl'>
        <div className='flex gap-3 items-center'>
        <img src={userImg} className='w-10 object-cover h-10 rounded-full' alt="" />
        <h2 className='text-xl font-medium'>Anjali Rajput</h2>
        </div>
        <h5 className='text-lg font-medium'>2.2 Km</h5>
      </div>


      <div className="flex gap-2 flex-col justify-between items-center">


        <div className="w-full mt-5">

          {/* 1 */}
          <div className="flex gap-5 p-3 border-b-2 border-gray-200 items-center">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">575/42 A</h3>
              <p className="text-sm text-gray-600">Rahul Nagar Raisen</p>
            </div>
          </div>

          {/* 2 */}

          <div className="flex gap-5 p-3 border-b-2 border-gray-200 items-center">
          <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">575/42 A</h3>
              <p className="text-sm text-gray-600">Rahul Nagar Raisen</p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex gap-5 p-3 border-b-2 border-gray-200 items-center">
          <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">200</h3>
              <p className="text-sm text-gray-600">Cash cash</p>
            </div>
          </div>
        </div>




        {/* Buttons and form for otp */}

       <div className="mt-6 w-full">

      <Link to='/captain-home' className="w-full flex justify-center items-center mt-5 bg-green-600 font-semibold rounded-lg px-32 py-2 text-white">
          Finish Ride
        </Link>
         <p className='text-red-700 mt-6 text-sm'>Click  on finish ride if you have completed the payment</p>     
       </div>
      </div>
    </div>
  )
}

export default FinishRide