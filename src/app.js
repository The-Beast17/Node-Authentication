const express = require("express");
<<<<<<< HEAD
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
=======
const userRouter = require("./routes/user.route");
const cookieParser = require("cookie-parser")
const app = express();


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("view engine" , "ejs");

app.use("/users" ,userRouter);



module.exports = app;
>>>>>>> 776266add89b0001f15b3816f795fb1cfb151576
