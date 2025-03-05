<<<<<<< HEAD
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type:String
    },
    email : {
        type:String
    },
    profileImage :{
       type : String
    },
    password : {
        type:String
    },
    posts:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "posts"
        }
    ]

});

const userModel = mongoose.model("user", userSchema);
=======
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName :{
        type : String
    },
    email :{
        type : String
    },
    profileImage :{
        type : String
    },
    password :{
        type : String
    },
});

const userModel = mongoose.model("user",userSchema);
>>>>>>> 776266add89b0001f15b3816f795fb1cfb151576

module.exports = userModel;