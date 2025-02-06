
//Jo User Ride Confirm Karega uski sari detail is model mei store hogi 
//Ye He Use Ke Ride ki Puri roadmap



const mongoose = require('mongoose');


const rideSchema = new mongoose.Schema({

  //User Jo Rahgea Uski Details ayegi yaha pe, lekin ha user  aur captian dono humare Bharat Ride Parivar ke hone chaiye  
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

  // User Ko Jo Captain Assign Hoga bo Hoga is schema mei assign ,  lekin ha user  aur captian dono humare Bharat Ride Parivar ke hone chaiye  
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'captain',
    },

    // User Ko Jaha se captain Utha Rha Hei Ye Rahegi Bo Loacation
    pickup: {
        type: String,
        required: true,
    },

    //User Ko Jaha Le Jaake Chhod Raha Hei captain Bo Location
    destination: {
        type: String,
        required: true,
    },

    //Kitns pesa lag rha hei ride ka bo yaha store hoga
    fare: {
        type: Number,
        required: true,
    },



   //User Ke Request Karne Ke Baad Ki Aaam Zindagi 

    status: {
        type: String,
        enum: [ 'pending', 'accepted', "ongoing", 'completed', 'cancelled' ],
        default: 'pending',
    },

    //Yaha Se Waha Jane Mei Kitna Samay Laga

    duration: {
        type: Number,
    }, // in seconds

    //Yaha Se Waha Ka Distance
    distance: {
        type: Number,
    }, // in meters

    // Kya Hei Id Paymnet Ki
    paymentID: {
        type: String,
    },
    //Order Ki Ride Uski Id 
    orderId: {
        type: String,
    },
    signature: {
        type: String,
    },
    
    //Ride Confirm Karne Ke liye id 
    otp: {
        type: String,
        select: false,
        required: true,
    },
})

module.exports = mongoose.model('ride', rideSchema);