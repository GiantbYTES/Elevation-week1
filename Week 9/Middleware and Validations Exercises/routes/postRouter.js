const express = require("express");
const {
  getPosts,
  addPost,
  getPostById,
  addComment,
} = require("../controllers/postsController");
const { postValidation } = require("../middlewares/validatePost");
const {
  validateComment,
  handleValidationErrors,
} = require("../middlewares/validateComment");
const { checkPostExists } = require("../middlewares/checkPostExists");

const router = express.Router();

router.get("/", getPosts);
router.post("/", postValidation, addPost);
router.get("/:id", getPostById);
router.post(
  "/:postId/comments",
  validateComment,
  handleValidationErrors,
  checkPostExists,
  addComment
);
router.get("/:postId/comments");

module.exports = router;
