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

module.exports = userModel;