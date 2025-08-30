const { body, param, validationResult } = require("express-validator");

// Validation rules based on commentSchema.js
const validateComment = [
  body("content")
    .notEmpty()
    .withMessage("Content is required")
    .isString()
    .withMessage("Content must be a string")
    .isLength({ min: 5, max: 500 })
    .withMessage("Content must be between 5 and 500 characters")
    .trim(),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email format")
    .normalizeEmail(),

  param("postId")
    .notEmpty()
    .withMessage("Post ID is required")
    .isString()
    .withMessage("Post ID must be a string")
    .trim(),
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array(),
    });
  }
  next();
};

module.exports = {
  validateComment,
  handleValidationErrors,
};
