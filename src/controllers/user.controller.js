const bcryptjs = require("bcryptjs");
const jwt  = require("jsonwebtoken");
const userModel = require("../models/user.model");

module.exports.registerViewController = (req, res)=>{
    res.render("register")
}

module.exports.registerUserController = async (req, res)=>{
    console.log(req.body)
    const {userName , email ,profileImage, password} = req.body;
    const hashPassword = bcryptjs.hashSync(password , 10);
    const user = await userModel.create({
        userName,
        email, 
        profileImage,
        password : hashPassword
    });

    const token = jwt.sign({
        id : user._id,
        email : user.email
    } , "node-auth-secret-key")

    res.cookie("token" , token);
    res.status(201).json({
        user,
        token
    });
}

module.exports.userProfileController= async (req , res)=>{
    const users = await userModel.find();
    console.log(users);
    res.render("profile", {users})
}