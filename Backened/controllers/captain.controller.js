//Controllers For captain model

const captainModel = require('../models/captain.model');

//Ye Service use hogi captainModel Create Karne Mei contriller ke through
const captainService = require('../services/captain.service');
//Contains Error That body contains for a particular requies
const {validationResult} = require('express-validator');


//Controller For registering user

module.exports.registerCaptain = async(req,res,next)=>{


   const errors = validationResult(req);
   if(!errors.isEmpty()){
    return res.status(400).json({error:errors.array()});
   }

   //Body Se Humei Ye Sab Mil Jaega req.body;

   const {fullname,email,password,vehicle} = req.body;

   const isCaptainAlreadyExists = await captainModel.findOne({email});

   if(isCaptainAlreadyExists){
      return res.status(400).json({message:"Captain Already Exists"});
  }

   //Now Here Finally We start creating user register karna matlav mere bhai 

   //Pehle Karege Passwrod hasing samjhe ki nahi

   const hashedPassword = await captainModel.hashPassword(password);

   const captain = await captainService.createCaptain({
    
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedPassword,
    color:vehicle.color,
    plate:vehicle.plate,
    capacity:vehicle.capacity,
    vehicleType:vehicle.vehicleType

   })

   const token = captain.generateAuthToken();
   
   res.status(201).json({token,captain});

}