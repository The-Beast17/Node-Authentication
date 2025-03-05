const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
<<<<<<< HEAD
const userMiddleware = require("../middlewares/user.middleware");

//  /user/register [get] yha hum user ko register karne ke liye ek form dikhayenge
router.get("/register" , userController.registerViewController);

router.post("/register", userController.registerUserController);

router.get("/profile",userMiddleware.authUser,userController.profileViewController);

router.get("/login", userController.loginViewController);

router.post("/login",userController.loginUserController);

router.get("/feed" , userMiddleware.authUser, userController.feedViewController);
=======
const jwt  = require("jsonwebtoken");

router.get("/register" , userController.registerViewController);

router.post("/register" , userController.registerUserController);

router.get("/profile",(req ,res ,next)=>{
    try{
    const token = req.cookies.token;
    const decoded = jwt.verify( token ,"node-auth-secret-key")
    next(); //agar user ka token match ho gya to userProfileController ko chla dega
    }catch(err){
       res.status(400).send("Unauthosized")
    }
} , userController.userProfileController);

>>>>>>> 776266add89b0001f15b3816f795fb1cfb151576

module.exports = router;