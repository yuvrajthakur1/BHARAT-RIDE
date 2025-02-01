//captain Service to communicate with mongodb 

const captainModel = require('../models/captain.model');

//!firstname agar firstname nahi hei to 

module.exports.createCaptain = async({firstname,lastname,email,password,color,plate,capacity,vehicleType})=>{
  if(!firstname||!email||!password||!color||!plate||!capacity){
    throw new Error('All Fields Are required');
  }

  //Agar Sari Field hei to 

  const captain = captainModel.create({
    fullname:{
      firstname,
      lastname
    },
    email,
    password,
    vehicle:{
      color,
      plate,
      capacity,
      vehicleType
    },

  })
  return captain;
}


