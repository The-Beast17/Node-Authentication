const express = require("express");
const userRoute = require("./routes/user.route");
const postRoute = require("./routes/post.route")
const cookieParser = require("cookie-parser");


const app = express();
app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use("/users", userRoute);
app.use("/posts", postRoute);


module.exports  = app;