const express = require("express");
const userRouter = require("./routes/user.route");
const cookieParser = require("cookie-parser")
const app = express();


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine" , "ejs");

app.use("/users" ,userRouter);



module.exports = app;