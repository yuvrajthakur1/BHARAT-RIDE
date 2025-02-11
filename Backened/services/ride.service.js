// Yaha Handle Hongi Ride Se related Sari Services Jo Baat Karegi humare mongu se on behalf of ride route model and controller kyuki unko lagta hei dar sidha baat karne mei

const rideModel = require("../models/ride.model");
const mapService = require("../services/maps.service");
const bcrypt = require('bcrypt');


//Crypto Is Used TO generate random values securely
const crypto = require('crypto');

//Function For Calculating fare using distance and time

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  // Function Jo Ki map Servies mei banaya  tha humne
  const distanceTime = await mapService.getDistanceTime(pickup, destination);

  const baseFare = {
    auto: 30,
    car: 50,
    motorcycle: 20,
  };

  const perKmRate = {
    auto: 10,
    car: 12,
    motorcycle: 4,
  };

  const perMinuteRate = {
    auto: 2,
    car: 3,
    motorcycle: 1.5,
  };

  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * perKmRate.auto +
        (distanceTime.duration.value / 60) * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * perKmRate.car +
        (distanceTime.duration.value / 60) * perMinuteRate.car
    ),
    motorcycle: Math.round(
      baseFare.motorcycle +
        (distanceTime.distance.value / 1000) * perKmRate.motorcycle +
        (distanceTime.duration.value / 60) * perMinuteRate.motorcycle
    ),
  };

  return fare;
}


module.exports.getFare = getFare;



//Function For Opt generation Jab User ride create Karega tab ye Function Call Hoga Ek Otp Bhi Generate hoga 


function getOtp(num){
  function generateOtp(num) {
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
    return otp;
}
return generateOtp(num);
}









//Funtion For Creating Ride  On The Basis Of ROute 
//THis IS THe Function Jo Ki HUm COntroller mei use karte hei 
//Ride Karne Ke LIye user, pickup, destination, vehicleType ye sab zaruri hei 

module.exports.createRide = async ({
  user, pickup, destination, vehicleType
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
      throw new Error('All fields are required');
  }


  //Ye Get Fare Wahi function hei Jo abhi Baya Tha Bhuk Gye kYa 
  const fare = await getFare(pickup, destination);



  const ride = rideModel.create({
      user,
      pickup,
      destination,
      //Ye Hum GEt Karrhe hei dynamically fare object hei car, auto, bike ke fares ka AUr Dynamically hum vehicleType se REquired fare le rhe hei
      otp:getOtp(6),
      fare: fare[ vehicleType ]
  })

  return ride;
}
