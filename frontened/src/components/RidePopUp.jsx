import 'react'

import 'remixicon/fonts/remixicon.css'

// const carimgurl =
//   "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png";

const  userImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgeFPHGTtBpqOyhMdENjo9TmVTKPt7nctiQ&s";


// eslint-disable-next-line react/prop-types
const RidePopUp = ({setRidePopUpPanel,setConfirmRidePopUpPanel}) => {



  return (
    <div>
      <i
        className="ri-arrow-up-wide-line font-bold text-2xl absolute right-1"
        onClick={()=>{
          setRidePopUpPanel(false);
        }
        }
      />

      <h3 className="text-2xl font-semibold mb-7">New Ride Available ! </h3>

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

        {/* Button */}

        <button className="w-full mt-5 bg-green-600 font-semibold rounded-lg p-2 text-white"
        onClick={
          ()=>{
            setConfirmRidePopUpPanel(true)
          }
        }
        >
          Accept
        </button>

        <button className="w-full mt-2 bg-gray-300 font-semibold rounded-lg p-2 text-gray-700"
        onClick={()=>{
          setRidePopUpPanel(false);
        }}
        >
          Ignore
        </button>
      </div>
    </div>
  )
}

export default RidePopUp