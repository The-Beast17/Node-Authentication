const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const userMiddleware = require("../middlewares/user.middleware");

//create post [GET]
router.get("/create", userMiddleware.authUser, postController.createPostViewController);

router.post("/create",userMiddleware.authUser, postController.createPostController);
module.exports = router;