// import React from 'react'

import { Link } from "react-router-dom";

const carimgurl =
  "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png";
const ridingMapImg = "https://staticmapmaker.com/img/google-placeholder.png";


const Riding = () => {


  return (
   <div className="h-screen ">

    <img src="/Bharat.png" className="w-48 absolute left-5 top-5" alt="Image" />

    <Link to='/home' className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">

    <i className="ri-home-3-fill text-lg font-medium "></i>
    </Link>
     <div className="h-1/2">
       <img src={ridingMapImg}  alt="" className="object-cover h-full w-full" />
    </div>
    <div className="h-1/2 p-4 ">

    <div className="flex justify-between  items-center">
        <img src={carimgurl} className="h-16" alt="" />

        <div>
          <h2 className="text-lg font-medium">Yuvraj Thakur</h2>
          <h4 className="font-semibold text-xl -mt-1 -mb-1">MP 04</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>


      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          
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
      </div>
       <button className="w-full mt-5 mb-2 bg-green-600 font-semibold rounded-lg p-2 text-white">Make A Payment</button>
    </div>
   </div>
  )
}

export default Riding