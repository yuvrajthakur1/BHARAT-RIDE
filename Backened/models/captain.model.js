const mongoose = require('mongoose');

//Required Things For TOken Generation
const brcypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Creating Captains Model

const captainSchema = new mongoose.Schema({
  fullname:{
    firstname:{
       type:String,
       required:true,
       minlength:[3,'First Name Must Be Of Length Of > 3']
    },
    lastname:{
    type:String,
    minlength:[3,'Last Name Must Be Of Length Of > 3']
   }
 },

 email: {
  type: String,
  required: true,
  unique: true,
  lowercase:true
},

password:{
  type:String,
  required:true,
  unique:true
},

socketId:{
  type:String,
}
,
status:{
  type:String,
  enum:['active','inactive'],
  default:'inactive'
}
,
vehicle:{
 color: {
  type:String,
  required:true,
  minlength:[3,'Color Must Be Mentioned'],
  },
  plate:{
    type:String,
    required:true,
    minlength:[3,'Atleast 3 character']
  },
  capacity:{
    type:Number,
    required:true,
    min:[1,'Capacity Must be 1']
  },
  vehicleType:{
   type:String,
   required:true,
   enum:['car','motorcycle','auto'],
  }
},

location:{
  lat:{
    type:Number,
  },
  lng:{
    type:Number,
  }
}
})



//Here Below we will create common method 

captainSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
  return token;
}

//Comparepassword method

captainSchema.methods.comparePassword = async function(password){
  return await  brcypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password){
  return await brcypt.hash(password,10);
}

const captainModel = mongoose.model('captain',captainSchema);

module.exports = captainModel;