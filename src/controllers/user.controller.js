const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');
const postModel = require("../models/post.model")
const jwt = require('jsonwebtoken');


module.exports.registerViewController = (req, res) => {
    res.render('register')
}

module.exports.registerUserController = async(req, res)=>{
    const {username , email , profileImage, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username,
        email,
        profileImage,
        password: hashPassword,
    });

    const token = jwt.sign({
        id : user._id,
        email:user.email
    },"user-auth-secret-node");
    
    res.cookie("token", token);

    res.status(201).json({
        user, token
    })   
}

module.exports.profileViewController = (req, res)=>{
    res.send("profile")
}


module.exports.loginViewController = (req, res)=>{
    res.render("login")
}

module.exports.loginUserController = async(req, res)=>{
    const {email , password} = req.body;

    const isUser = await userModel.findOne({email});

    if(!isUser){
        return res.status(400).json({
            message: "User not found"
        })
    }

    const isMatch = await bcrypt.compare(password , isUser.password);

    if(!isMatch){
        return res.status(400).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id : isUser._id,
        email:isUser.email
    }, "user-auth-secret-node");

    res.cookie("token" , token);

    res.status(200).json({
       user : isUser , token
    });

    //if user is login succesfully open the feed page
    // res.redirect("feed");
}

module.exports.feedViewController = async(req, res)=>{
    //populate author feild ke ander user ki puri information leke a jayega
        const posts = await postModel.find().populate("author");
        console.log(posts);
        res.render("feed",{posts})
}