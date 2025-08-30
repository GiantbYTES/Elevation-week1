const postModel = require("../models/postModel.js");

async function getPosts(req, res) {
  const posts = await postModel.getPosts();
  res.status(200).json(posts);
}

async function getPostById(req, res) {
  const post = await postModel.getPostById(req.params.id);
  post
    ? res.status(200).json(post)
    : res.status(404).json({ error: "Unknown post id" });
}

async function addPost(req, res) {
  const newPost = await postModel.addPost(req.body);
  res.status(201).json(newPost);
}

async function addComment(req, res) {
  const { postId } = req.params;
  const { content, email } = req.body;

  // Add postId from URL params to the comment data
  const commentData = { content, email, postId };

  try {
    const newComment = await postModel.addComment(commentData);
    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: newComment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add comment",
      error: error.message,
    });
  }
}

module.exports = { getPosts, getPostById, addPost, addComment };
