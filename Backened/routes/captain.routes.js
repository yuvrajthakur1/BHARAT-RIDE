//ROutes For Captain Model
//ROuer USe Hote Hei App.js file Pe

const express = require('express');
const router = express.Router();
const captainController = require('../controllers/captain.controller');

//Express Validator For Applying validation to coming data from routes

const {body} = require('express-validator');

router.post('/register',[
  //Array Of Validation
  body('email').isEmail().withMessage('invalid email'),
  body('fullname.firstname').isLength({min:3}).withMessage('name is short'),
  body('password').isLength({min:6}).withMessage('password  is short'),
  body('vehicle.color').isLength({min:3}).withMessage('Color Must Be Of three Character'),
  body('vehicle.plate').isLength({min:3}).withMessage('Plate Must Be Of three Character'),
  body('vehicle.capacity').isLength({min:1}).withMessage('Capacity Must Be Of Three'),
  body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid Vehicle Type')  
],captainController.registerCaptain)








module.exports = router;
