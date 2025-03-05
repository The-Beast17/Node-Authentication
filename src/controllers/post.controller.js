const postModel = require("../models/post.model");
const userModel = require("../models/user.model");

module.exports.createPostViewController = async (req, res)=>{
    res.render("createPost");
}


module.exports.createPostController = async (req, res)=>{
    const {media , caption} = req.body;
    console.log(req.user);
    const post = await postModel.create({
        media,
        caption,
        author : req.user.id
    });

    //userModel me particular user ko find karege or posts array me push kr dega 
    await userModel.findOneAndUpdate(
        {_id:req.user.id},
        {
            $push:{
                posts : post._id
            }
        }
    )
    
    res.status(201).json({
        post
    })
}