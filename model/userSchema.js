const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required :true
    },
    email : {
        type: String, 
        required:true,
        unique:true
    }, 
    age : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }, 
    password : {
        type : String,
        required : true
    },
    userType : {
        type : String,
        enum : ["USER","ADMIN"]
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = { User }