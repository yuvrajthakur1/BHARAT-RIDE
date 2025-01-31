const express = require('express');

const router = express.Router();

const {body} = require('express-validator');

const userController = require('../controllers/user.controller');

const authMiddleware = require('../middlewares/auth.middleware');


//Route For Registration
//body contains all the sent data by http request in the form of json and has validation technique

router.post('/register',[
  body('email').isEmail().withMessage('invalid email'),
  body('fullname.firstname').isLength({min:3}).withMessage('name is short'),
  body('password').isLength({min:6}).withMessage('password  is short')
],userController.registerUser)



//Creating login route for user

router.post('/login',[
  body('email').isEmail().withMessage('invalid email'),
  body('password').isLength({min:6}).withMessage('password  is short')
],
userController.loginUser)



//Route for profile page here that we will get from server

router.get(
  '/profile',
  authMiddleware.authUser,
  userController.getUserProfile
)


//Creating a logout router 

router.post('/logout',authMiddleware.authUser,userController.logoutUser)


module.exports = router;