// import React from 'react'

// eslint-disable-next-line react/prop-types
const LocationSearchPanel = ({setPanelOpen,setVehiclePanelOpen}) => {

  // Sample Array of locations

  const handleClick = ()=>{
    setPanelOpen(false);
    setVehiclePanelOpen(true);
  }

  const locations = [
    "24B, Near Kapoor's cafe , Bhopal",
    "25B, Near Malhotra's cafe , Bhopal",
    "26B, Near Thakur's cafe , Bhopal",
    "27B, Near Malviya's cafe , Bhopal",
    "28B, Near Gupta's cafe , Bhopal",
    "29B, Near Chanchalani's cafe , Bhopal",
  ]

  return (

    
    <div>
{
      locations.map((location, index) =>{
              {/* This Is just a sample data */}
      return  <li key={index} onClick={handleClick} className="list-none">
        <div className="flex gap-4 p-3 bg-gray-100 rounded-xl  items-center justify-start my-2 border border-gray-50 active:border-black">
      <h2 className="bg-[#eee] h-7 w-7 rounded-full flex items-center justify-center"><i className="ri-map-pin-fill"></i></h2>
      <h4 className="font-medium">{location}</h4>
      </div>
      </li> 
      }
    )
    }
      
      
    </div>
  )
}

export default LocationSearchPanel