const userModel = require('../models/user_model');

const userService = require('../services/user.service');

const {validationResult} = require('express-validator');

const blackListTokenModel = require('../models/blacklistToken.model');


//logic for registring user 


module.exports.registerUser = async (req,res,next)=>{

   //yaha jo jo error ayege body ke user ke content ke validation mei bo lenge validationResult mei se
  
   const errors  = validationResult(req);
    if(!errors.isEmpty())
      {
           return res.status(400).json({errors:errors.array()})
      } 

      const {fullname,email,password} = req.body;

      const isUserAlreadyExists = userModel.findOne({email});

      if(isUserAlreadyExists){
          return res.status(400).json({message:"User Already Exists"});
      }

      // ..pehle jo method use kari this bo use kar rhe hei
      const hashedPassword = await userModel.hashPassword(password);
      
      //Ab ye user create kar rhe hei jo ki jaega  service mei aur fir service de db mei 

      //Ye Hum userService ka function call maar rahe hei 

      const user = await userService.createUser({
           firstname:fullname.firstname,
           lastname:fullname.lastname,
           email,
           password:hashedPassword,
      })

      //generateing token for user secret token

      const token = user.generateAuthToken();

      res.status(201).json({token,user});
}






//Logic for user login and validation related to it 

module.exports.loginUser = async (req,res,next)=>{
     const errors = validationResult(req);
     if(!errors.isEmpty()){
          return res.status(400).json({error:errors.array()})
     }

     const {email,password} = req.body;

     const user = await userModel.findOne({email}).select("+password");

     if(!user){
          return res.status(401).json({message:'Invalid email or password'});
     }
     const isMatch = await user.comparePassword(password);

     if(!isMatch){
          return res.status(401).json({message:"invalid password"})
     }

     const token = user.generateAuthToken();
     res.cookie('token',token);
     res.status(200).json({token,user})
}






//Controller for /profile route
//Jis user ne login ne use kia hei sirf usi ko bo page of profile dikeh

//Uske Liye Humei ek Middleware lagana padta hei

//yaha auth function is important



module.exports.getUserProfile = async(req,res,next)=>{
    res.status(200).json(req.user);     
} 


//Logout controller 

module.exports.logoutUser = async (req,res,next)=>{
     res.clearCookie('token');
     const token =  req?.cookies?.token || req?.headers?.authorization.split(' ')[1];

     await blackListTokenModel.create({token});
     res.status(200).json({message: 'Logged Out'});
}
