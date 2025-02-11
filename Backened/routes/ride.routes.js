//Here We Will Contain All Routes Related To Rides Of User 


const express = require('express');

const router = express.Router();

const {body,query} = require('express-validator');

const rideController = require('../controllers/ride.controller');

const authMiddleware = require('../middlewares/auth.middleware')

//Ye Router Use Bhaiya Ride Ko create Karne Ke Liye Kisi bhi User Ki 
//Yaha Ride Se related jitni bhi informatino jarurui hoti hei bo humei yaha chahiye hogi 
//Yahi se Suru Hogi User Ki Yatra Ki Tyarri 
//Aur Jo Bhi Samagri humei chahiye hogi bo sab humei milegi body se are human ki body nahi
// body jo ki object hei json ka

router.post('/create',
  authMiddleware.authUser,
  body('pickup').isString().isLength({min:3}).withMessage('Invalid Location'),
  body('destination').isString().isLength({min:3}).withMessage('Invalid Destination Address'),
  body('vehicleType').isString().isIn([ 'auto', 'car', 'motorcycle' ]).withMessage('Invalid vehicle type'),
  rideController.createRide
)



// ROute For Creating / Calculating fare

router.get('/get-fare',authMiddleware.authUser,
  query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
  query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
  rideController.getFare)


module.exports = router;


