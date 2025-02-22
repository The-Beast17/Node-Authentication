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

module.exports = userModel;