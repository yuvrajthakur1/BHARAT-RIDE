// import React from 'react'

const carimgurl =
  "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png";

// eslint-disable-next-line react/prop-types
const WaitForDriver = ({setWaitingFordriver}) => {
  return (
    <div className="relative">
      <h3 className="absolute  font-bold  w-full -mt-10 text-center p-2"
      onClick={()=>setWaitingFordriver(false)}
      >

        
        <i
          className="ri-arrow-down-wide-line text-2xl"
          
        />
      </h3>

      <div className="flex justify-between  items-center">
        <img src={carimgurl} className="h-20" alt="" />

        <div>
          <h2 className="text-lg font-medium">Yuvraj Thakur</h2>
          <h4 className="font-semibold text-xl -mt-1 -mb-1">MP 04</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mb-5">Waiting For A Driver</h3>

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
      </div>
    </div>
  );
};

export default WaitForDriver;
