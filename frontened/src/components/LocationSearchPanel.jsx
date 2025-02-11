/* eslint-disable react/prop-types */
// import React from 'react';

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanelOpen, suggestions, setPickUp, setDestination, activeInput }) => {
  const handleClick = (location) => {
    // setPanelOpen(false);
    if (activeInput === 'pickup') {
      setPickUp(location);
    } else {
      setDestination(location);
    }
  };

  return (
    <div className="mt-5">
      {suggestions.map((location, index) => (
        <li key={index} onClick={() => handleClick(location)} className="list-none">
          <div className="flex gap-4 p-3 bg-gray-100 rounded-xl items-center justify-start my-2 border border-gray-50 active:border-black">
            <h2 className="bg-[#eee] h-7 w-7 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        </li>
      ))}
    </div>
  );
};

export default LocationSearchPanel;