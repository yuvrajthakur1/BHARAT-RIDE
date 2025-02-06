//Yaha Se Bhaiya Ki jaegi Ride Apki Control Ache se Bilkul

//sabse pehle to rideService hogi import fir agey hogi baki ki baat

const rideService = require("../services/ride.service");
const {validationResult} = require('express-validator');

module.exports.createRide = async (req, res) => {


  //Ye Jo route mei body ke data pe validation laagyi thi uske sare result ayege ki validation sahi hei ki nahi hei 

  const errors = validationResult(req);

  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //Koi Error Nahi Hei TO Agey Badho Hum Tumare sath hei hei nahi to vapas laut jao 

  //ye humne body se le lia apna data valid data yaad rakho uddeshya nahi bhulna hei 

  const {pickup, destination, vehicleType } = req.body;


  //All Set to bhaiya yaha humne jo service mei banaya tha createRide jo ki sidha db se baat karega usko le aege ki hn bana do humari ride

  try {
    const ride = await rideService.createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });

    //Kardege res ki hn hogyi hei ride create apke db mei
    res.status(201).json(ride);


    //Ab Yaha Pata Lagayege ki bhai driver ne user ko uthaya kaha se hei on the basis of pickup location
   
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
