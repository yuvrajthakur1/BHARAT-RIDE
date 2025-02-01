//Controllers For captain model

const captainModel = require('../models/captain.model');

//Ye Service use hogi captainModel Create Karne Mei contriller ke through
const captainService = require('../services/captain.service');
//Contains Error That body contains for a particular requies
const {validationResult} = require('express-validator');

const authMiddleware = require('../middlewares/auth.middleware');
//Controller For registering captain

const blackListTokenModel = require('../models/blacklistToken.model')

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


//Controller For Login captain

module.exports.loginCaptain = async(req,res,next)=>{
   const errors = validationResult(req);

   if(!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()});
   }
   const {email,password} = req.body;
   const captain = await captainModel.findOne({email}).select('password');

   if(!captain){
      return res.status(401).json({message:"Invalid Username Or Password"});
   }

   const isMatch = await captain.comparePassword(password);

     if(!isMatch){
          return res.status(401).json({message:"invalid password"})
     }

   const token = captain.generateAuthToken();

   res.cookie('token',token);
   res.status(200).json({token,captain});
}





//Controller For Getting Profile

module.exports.getCaptainProfile = async(req,res,next)=>{
   res.status(200).json({captain:req.captain});
}


//Controller For Logout hte captain

module.exports.logoutCaptain = async(req,res,next)=>{
   res.clearCookie('token');
   const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];
   await blackListTokenModel.create({ token });
   res.clearCookie('token');
   res.status(200).json({ message: 'Logged out' });

}