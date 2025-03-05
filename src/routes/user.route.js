const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const userMiddleware = require("../middlewares/user.middleware");

//  /user/register [get] yha hum user ko register karne ke liye ek form dikhayenge
router.get("/register" , userController.registerViewController);

router.post("/register", userController.registerUserController);

router.get("/profile",userMiddleware.authUser,userController.profileViewController);

router.get("/login", userController.loginViewController);

router.post("/login",userController.loginUserController);

router.get("/feed" , userMiddleware.authUser, userController.feedViewController);

module.exports = router;