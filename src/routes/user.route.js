const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
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


module.exports = router;