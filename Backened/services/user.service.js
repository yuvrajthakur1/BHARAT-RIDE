//Services are used to interact
//importing user model
const userModel = require('../models/user_model');

//iska kaam sirf user ko create karna rahega

//it accept all data according to our userSchema model

module.exports.createUser = async ({firstname,lastname,email,password})=>{

  if(!firstname||!email||!password){
    throw new Error('All The Fields Are Required Bro')
  }

  //ye register hone pe user ka account create ho rha hei
  //Agar error nahi ata hei to hum new user create kardege
  const user = await userModel.create({
     fullname:{
      firstname,
      lastname
     },
     email,
     password
  })
   return user;
}