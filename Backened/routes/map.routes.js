
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapController= require('../controllers/maps.controller');
const {query} = require('express-validator'); 



//Routes to get Latitude and Longitude of a particular address
router.get('/get-coordinates',
  query('address').isString().isLength({min:3}),
  authMiddleware.authUser,
  mapController.getCoordinates
);


// route to find distance between two addresses

router.get('/get-distance-time',
  query('origin').isString().isLength({min:3}),
  query('destination').isString().isLength({min:3}),
  authMiddleware.authUser,
  mapController.getDistanceTime

)


// route to get suggestion on the basis of search 

router.get('/get-suggestions',
  query('input').isString().isLength({min:3}),
  authMiddleware.authUser,
  mapController.getAutoCompleteSuggestions
)


module.exports = router;

