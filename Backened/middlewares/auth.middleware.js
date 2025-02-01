const userModel = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const blacklistTokenModel = require('../models/blacklistToken.model');


//Yaha Authorisation karege user login ka 
module.exports.authUser = async (req,res,next)=>{

      //ab yaha humei chaiye token ya to header mei milega ya to cookies mei milega
      const token  = req?.cookies?.token || req.headers.authorization.split(' ')[1];

      if(!token){
        return res.status(401).json({message:'unauthorized'});
      }

      const isBlackListed = await  blacklistTokenModel.findOne({token:token});

      if(isBlackListed){
        res.status(401).json({message:'not authorized'});
      }
      //Matalb Yaha Humei Mil Gya Token Ab Hum Usey Karege Decoded
       //Here Jo generateauthtoken mei humne dala tha wahi milega decode hoke 

      try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET); 
        const user = await userModel.findById(decoded._id);

        req.user = user;
       
        return next();

      } catch (error) {
            return res.status(401).json({message:"Unauthorized"});
      }
}