// import React from 'react'




const carimgurl = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png";

const bikeimgurl = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png";

const autoimgurl = "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png";


// eslint-disable-next-line react/prop-types
const VehiclePanel = ({setVehiclePanelOpen,setConfirmRidePanel}) => {





  return (
<div>

    <div className='flex justify-between'>
        <h3 className='text-2xl font-semibold mb-5' >Choose a Vehicle</h3>
        <i className="ri-arrow-down-wide-line font-bold text-2xl"
        onClick={()=>{
          setVehiclePanelOpen(false);
        }}
        ></i>
       </div>


       {/* Car */}
        <div className=' w-full flex gap-1  mb-2 bg-gray-100 active:border-2 rounded-xl items-center p-3 justify-between '
        onClick={()=>{
          setConfirmRidePanel(true)
        }}>
          <img src={carimgurl} alt="" className='h-12  ' />
          <div className=' w-1/2 ml-6'>
            <h4 className='font-medium text-base'>Bharat Ride <span>4<i className="ri-user-3-fill"></i></span> </h4>
            <h5 className='font-medium text-sm'>2 min away</h5> 
            <p className='font-medium text-xs text-gray-700'>Affordable, Compact Rides</p>
          </div>
            <h2 className='text-lg font-semibold'>Rs.193.22</h2>
         </div>

         {/* Bike */}

       <div className=' w-full flex gap-1 bg-gray-100 mb-2 active:border-2 rounded-xl items-center p-3 justify-between'>
          <img src={bikeimgurl} alt="" className='h-12  ' />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>Bharat Moto <span>1<i className="ri-user-3-fill"></i></span> </h4>
            <h5 className='font-medium text-sm'>2 min away</h5> 
            <p className='font-medium text-xs text-gray-700'>Affordable, Compact Rides</p>
          </div>
            <h2 className='text-lg font-semibold'>Rs.65</h2>
       </div>


         {/* Auto */}

         <div className=' w-full flex gap-1 mb-2 bg-gray-100 active:border-2 rounded-xl items-center p-3 justify-between '>
          <img src={autoimgurl} alt="" className='h-12  ' />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>Bharat Auto <span>3<i className="ri-user-3-fill"></i></span> </h4>
            <h5 className='font-medium text-sm'>2 min away</h5> 
            <p className='font-medium text-xs text-gray-700'>Affordable, Compact Rides</p>
          </div>
            <h2 className='text-lg font-semibold'>Rs.90</h2>
         </div>

</div>
   
  )
}

export default VehiclePanel