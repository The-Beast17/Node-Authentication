const mongoose = require("mongoose");

function connect(){
    mongoose.connect("mongodb://localhost:27017/node-day12")
    .then(()=>{
        console.log("connected to db");
    }).catch((err)=>{
        console.error(err);
    });  
}

module.exports = connect;