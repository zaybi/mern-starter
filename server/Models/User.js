const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        maxlength:50

    },
    email: {
        type: String,
        trim: true,
        unique : true

    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 30
        
    },
    role : {
        type:Number,
        default: 0
    }
,
    token : {
        type: String, 
        default: null,
    },
    tokenExp : {
        type: Number
    }



});


// find by token method










module.exports =mongoose.model('User' , userSchema);