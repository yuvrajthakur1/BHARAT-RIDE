// import React from 'react'

import { CaptainDataContext } from "../context/CaptainContext";
// import CaptainContext from "../context/CaptainContext";
import { useContext } from "react";

const driverImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-Z21as4QzW8U5G8qCaPaxuoEDuU8ICoJDw&s";

const CaptainDetails = () => {


  const {captain} = useContext(CaptainDataContext)
  return (
    <div>
      <div className="flex items-center justify-between px-4">
          <div className="flex items-center justify-start gap-3">
            <img
              src={driverImg}
              className="w-10 h-10 object-center rounded-full"
              alt=""
            />
            <h4 className="text-lg font-medium">{captain.fullname.firstname + " " + captain.fullname.lastname }</h4>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Rs.295.2</h4>
            <p className="text-sm bg-gray-200 text-center ">Earned</p>
          </div>
        </div>

        <div className="flex p-4 bg-gray-100 mt-2 rounded-2xl justify-center gap-5 items-start">
          <div className="text-center">
            <i className=" text-3xl mb-2 font-thin ri-timer-fill"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>

          <div className="text-center">
            <i className=" text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>

          <div className="text-center">
            <i className=" text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails