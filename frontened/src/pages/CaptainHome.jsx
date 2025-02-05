// import React from 'react'

import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useEffect, useRef, useState } from "react";
const ridingMapImg = "https://staticmapmaker.com/img/google-placeholder.png";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);


  
  useEffect(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );




  useEffect(
    function () {
      if (confirmRidePopUpPanel) {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUpPanel]
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

      <div className="h-3/5">
        <img src={ridingMapImg} alt="" className="object-cover h-full w-full" />
      </div>

      <div className="h-2/5 p-6 ">
        <CaptainDetails />
      </div>

      {/* Panel For RIde Popup */}
      <div
        ref={ridePopUpPanelRef}
        className="fixed w-full z-10 translate-y-full  bottom-0 bg-white px-3 py-8 "
      >
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>

      {/* Panel For Confirm RidePopup */}
      <div
        ref={confirmRidePopUpPanelRef}
        className="fixed w-full z-10 translate-y-full h-screen bottom-0 bg-white px-3 py-8 "
      >
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
    </div>

    
  );
};

export default CaptainHome;
