const postModel = require("../models/postModel");

// Middleware to check if a post exists by postId
const checkPostExists = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const post = await postModel.getPostById(postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
        error: `Post with ID '${postId}' does not exist`,
      });
    }

    // Optionally attach the post to the request for use in the next middleware
    req.post = post;
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error checking post existence",
      error: error.message,
    });
  }
};

module.exports = { checkPostExists };
