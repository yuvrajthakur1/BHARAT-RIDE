/* eslint-disable react/prop-types */
import 'react'



const carimgurl =
  "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png";
  
const LookingForDriver = (props) => {
  return (
    <div className="relative">

      <i
        className="ri-arrow-down-wide-line  absolute right-1 font-bold text-2xl"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      />
      <h3 className="text-2xl font-semibold mb-5">Looking For Driver</h3>




      <div className="flex gap-2 flex-col justify-between items-center">

        <img src={carimgurl} className="h-20" alt="" />


        <div className="w-full mt-5">

          {/* 1 */}
          <div className="flex gap-5 p-3 border-b-2 border-gray-200 items-center">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">575/42 A</h3>
              <p className="text-sm text-gray-600">{props.pickup}</p>
            </div>
          </div>

          {/* 2 */}

          <div className="flex gap-5 p-3 border-b-2 border-gray-200 items-center">
          <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">575/42 A</h3>
              <p className="text-sm text-gray-600">{props.destination}</p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex gap-5 p-3 border-b-2 border-gray-200 items-center">
          <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">&#8377; {props.fare[props.vehicleType]}</h3>
              <p className="text-sm text-gray-600">Cash cash</p>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default LookingForDriver