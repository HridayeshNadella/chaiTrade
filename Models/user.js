const mongoose = require('mongoose');

const User = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    userName: {type : String, required : false},
    email: {type : String, required : true},
    password: {type : String, required : true},
    profileImage: {type : String, required : false},
    education: {type : String, required : false},
    countryCode: {type : Number, required : false},
    phoneNumber: {type : Number, required : false},
    income: {type : Number, required : false},
    incomeType: {type : String, required : false},
    isMentor: {type : Boolean, required : false},
    file : {type : String, required : false}
});

module.exports = mongoose.model('User',User);