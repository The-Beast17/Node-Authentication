const mongoose = require("mongoose");

<<<<<<< HEAD
function connect(){
    mongoose.connect("mongodb://localhost:27017/node-day12")
    .then(()=>{
        console.log("connected to db");
    }).catch((err)=>{
        console.error(err);
    });  
=======

function connect(){
    mongoose.connect("mongodb://localhost:27017/day11Auth")
    .then(()=>{
        console.log("Connected to database")
    }).catch(err=>{
        console.log(err)
    })
>>>>>>> 776266add89b0001f15b3816f795fb1cfb151576
}

module.exports = connect;