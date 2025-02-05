// import React from 'react'

import 'remixicon/fonts/remixicon.css'
const ridingMapImg = "https://staticmapmaker.com/img/google-placeholder.png";
import {useEffect, useRef, useState } from "react";

import gsap from 'gsap';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
// import WaitingForDriver from '../components/WaitingForDriver';
import LookingForDriver from '../components/LookingForDriver';
import WaitForDriver from '../components/WaitingForDriver';
// import {useGSAP} from '@gsap/react';
// import {useGSAP} from 'react-gsap';


const Home = () => {

  const [pickUp,setPickUp] = useState('');
  const [destination,setDestination] = useState('');
  const [panelOpen,setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);


  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel,setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const handlePanelOpen = ()=>{
    setPanelOpen(true);
  }

  const submitHandler = (e)=>{
    e.preventDefault();
  }

  
   
 
 useEffect(()=>{
  if(panelOpen){
    gsap.to(panelRef.current,{
      height:'70%',
      duration:1,
      padding:20
      
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
  }else{
    gsap.to(panelRef.current,{
      height:'0%',
      duration:1,
      
    })
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
  }
 },[panelOpen])




 useEffect(function () {
  if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(vehiclePanelRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ vehiclePanelOpen ])



 useEffect(function () {
  if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(confirmRidePanelRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [confirmRidePanel])



useEffect(function () {
  if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(vehicleFoundRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [vehicleFound])



useEffect(function () {
  if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [waitingForDriver])

 



return (
  <div className=" overflow-hidden h-screen relative">




       <img src="/Bharat.png" className="w-48 absolute left-5 top-5" alt="Image" />




       <div
        className="h-screen w-screen"
        
        >
           {/* Image For Temorary use */}
           <img src={ridingMapImg}  alt="" className="object-cover h-full w-full " />
       </div>





      <div className="h-screen top-0 absolute w-full flex flex-col justify-end rounded-lg">

        <div className="h-[30%] p-6 relative bg-white">

          <h5 ref={panelCloseRef} onClick={()=>setPanelOpen(false)} className= " opacity-0 font-bold absolute right-2 text-2xl">
            <i className="ri-arrow-down-wide-line"
            
            ></i>
          </h5>
          <h4 className="text-2xl  font-semibold">Find a trip</h4>
         <form onSubmit={()=>submitHandler} className="">

           <div className="absolute line bg-gray-900 h-16 w-1 top-1/2 left-10 rounded-full "></div>

            <input type="text"  placeholder="Add a pick up location" className="px-12 py-2 bg-[#eee] border rounded-lg w-full mt-5 text-lg" 
            onClick={handlePanelOpen}
            value={pickUp}
            onChange={(e)=>setPickUp(e.target.value)}
            />
            <input type="text"  placeholder="Enter Your destination" className="px-12 py-2 bg-[#eee] border rounded-lg w-full mt-5 text-lg"
            onClick={handlePanelOpen}
            value={destination}
            onChange={(e)=>setDestination(e.target.value)}
            />
          </form>
        </div>

        <div  ref={panelRef} className={`h-0  bg-white  location-search-panel`}>
            <LocationSearchPanel  setVehiclePanelOpen={setVehiclePanelOpen}  setPanelOpen={setPanelOpen} ></LocationSearchPanel>      
        </div>
      </div>





       {/* Panel For After Clicking On Location */}

     <div ref={vehiclePanelRef} className='fixed w-full z-10   bottom-0 bg-white px-3 py-8 translate-y-full'>
           <VehiclePanel setVehiclePanelOpen = {setVehiclePanelOpen} setConfirmRidePanel = {setConfirmRidePanel} />
     </div>

      {/* Panel after Clicking particular vehicle */}

      <div ref={confirmRidePanelRef} className='fixed w-full z-10   bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
           <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>


      {/*Looking For A driver Panel*/}

      <div ref={vehicleFoundRef}  className='fixed w-full z-10   bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'>
           <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>


      {/* Waiting For A Driver Panel */}
      <div ref={waitingForDriverRef}  className='fixed w-full z-10   bottom-0 bg-white px-3 py-6 pt-12 '>
           <WaitForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>





    </div>
  )
}

export default Home

