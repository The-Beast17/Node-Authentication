const mongoose = require("mongoose");


function connect(){
    mongoose.connect("mongodb://localhost:27017/day11Auth")
    .then(()=>{
        console.log("Connected to database")
    }).catch(err=>{
        console.log(err)
    })
}

module.exports = connect;