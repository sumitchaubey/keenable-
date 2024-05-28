const mongoose = require('mongoose');
const applySchema = new mongoose.Schema({
    first_name : {
        type : String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    education : {
        type: String,
        required : true

    },
    address:{
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true

    },
    pincode: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    upload:{
        type: String,
        required: true
    }

});

const Apply = mongoose.model('Apply',applySchema);
module.exports = Apply;