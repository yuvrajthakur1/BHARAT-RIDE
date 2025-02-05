// import React from 'react's

import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";
// import CaptainDetails from "../components/CaptainDetails";
// import RidePopUp from "../components/RidePopUp";
// import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const ridingMapImg = "https://staticmapmaker.com/img/google-placeholder.png";

const CaptainRiding = () => {

   const [finishRidePanel, setFinishRidePanel] = useState(false);

   const finishRidePanelRef = useRef(null);


  useEffect(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen ">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img src="/Bharat.png" className="w-48 " alt="Image" />
        <Link
          to="/home"
          className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-medium "></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img src={ridingMapImg} alt="" className="object-cover h-full w-full" />
      </div>

      <div className="h-1/5 p-6 bg-amber-400 flex relative   items-center justify-between "

      onClick={()=>{
        setFinishRidePanel(true);
      }}
      
      >
        <h5 className="absolute top-0 text-center w-[93%]">
          <i className="ri-arrow-up-s-line text-3xl text-white"></i>
        </h5>
        <h4 className="text-lg font-semibold mt-4 ">4 Km Away</h4>
        <button className="ml-3 px-3 flex justify-center items-center mt-5 bg-green-600 font-semibold rounded-lg p-1 text-white">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 translate-y-full  bottom-0 bg-white px-3 py-8 "
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
