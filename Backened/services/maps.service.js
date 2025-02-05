const axios = require("axios");


// 1....
module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;
  try {
    const response = await axios.get(url);

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng,
      };
    }
    throw new Error("No results found");
  } catch (error) {
    throw new Error("Failed to get coordinates: " + error.message);
  }
};


// 2...
module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("origin and destination is required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API;

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === "OK") {

      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new Error("No routes found");
      }

      return response.data.rows[0].elements[0];

    } else {


         throw new Error('unable to fetch distance and time');
    }
  } catch (error) {
    console.log(error);
    throw err;
  }
};


// 3...

module.exports.getAutoCompleteSuggestions = async(input)=>{
  if (!input) {
    throw new Error('query is required');
}

const apiKey = process.env.GOOGLE_MAPS_API;
const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
        return response.data.predictions.map(prediction => prediction.description).filter(value => value);
    } else {
        throw new Error('Unable to fetch suggestions');
    }
} catch (err) {
    console.error(err);
    throw err;
}
}