import "remixicon/fonts/remixicon.css";
const ridingMapImg = "https://staticmapmaker.com/img/google-placeholder.png";
import { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";

import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [activeInput, setActiveInput] = useState(null);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [fare, setFare] = useState({});

  const fetchSuggestions = useCallback(async (input) => {
    if (!input) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions?input=${input}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  }, []);

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    if (type === "pickup") {
      setPickup(value);
    } else {
      setDestination(value);
    }
    setActiveInput(type);
    fetchSuggestions(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        duration: 1,
        padding: 20,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        duration: 1,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useEffect(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        y: 0,
        duration: 1,
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: "100%",
        duration: 1,
      });
    }
  }, [vehiclePanelOpen]);

  useEffect(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        y: 0,
        duration: 1,
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        y: "100%",
        duration: 1,
      });
    }
  }, [confirmRidePanel]);

  useEffect(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        y: 0,
        duration: 1,
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        y: "100%",
        duration: 1,
      });
    }
  }, [vehicleFound]);

  useEffect(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        y: 0,
        duration: 1,
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        y: "100%",
        duration: 1,
      });
    }
  }, [waitingForDriver]);

  // Function For Find Ride Button

  async function findTrip() {
    setPanelOpen(false);
    setVehiclePanelOpen(true);
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
      {
        params: { pickup, destination },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log(response.data);
  }

  return (
    <div className="overflow-hidden h-screen relative">
      <img
        src="/Bharat.png"
        className="w-48 absolute left-5 top-5"
        alt="Image"
      />
      <div className="h-screen w-screen">
        <img src={ridingMapImg} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="h-screen top-0 absolute w-full flex flex-col justify-end rounded-lg">
        <div className="h-[30%] p-6 relative bg-white">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="opacity-0 font-bold absolute right-2 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler} className="">
            <div className="absolute line bg-gray-900 h-16 w-1 top-1/2 left-10 rounded-full"></div>
            <input
              type="text"
              placeholder="Add a pick up location"
              className="px-12 py-2 bg-[#eee] border rounded-lg w-full mt-5 text-lg"
              onClick={() => {
                setPanelOpen(true);
                setActiveInput("pickup");
              }}
              value={pickup}
              onChange={(e) => handleInputChange(e, "pickup")}
            />
            <input
              type="text"
              placeholder="Enter Your destination"
              className="px-12 py-2 bg-[#eee] border rounded-lg w-full mt-5 text-lg"
              onClick={() => {}}
              value={destination}
              onChange={(e) => handleInputChange(e, "destination")}
            />
          </form>

          <button
            className="w-full mt-2  bg-black font-semibold rounded-lg px-12 py-1 text-white"
            onClick={findTrip}
          >
            Find A Ride
          </button>
        </div>
        <div
          ref={panelRef}
          className={`h-0 bg-white  ${
            panelOpen ? "block" : "hidden"
          } location-search-panel`}
        >
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
            suggestions={suggestions}
            setPickUp={setPickup}
            setDestination={setDestination}
            activeInput={activeInput}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full"
      >
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full"
      >
        <ConfirmedRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full"
      >
        <LookingForDriver
          setVehicleFound={setVehicleFound}
          setWaitingForDriver={setWaitingForDriver}
        />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full"
      >
        <WaitForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
