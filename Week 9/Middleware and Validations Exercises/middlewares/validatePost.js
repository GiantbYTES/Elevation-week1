const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const { postSchema } = require("../data/postSchema");

const ajv = new Ajv();
addFormats(ajv);
const validatePost = ajv.compile(postSchema);

function postValidation(req, res, next) {
  console.log("postValidation");
  console.log("Request body:", JSON.stringify(req.body, null, 2));
  console.log("Tags type:", typeof req.body.tags);
  console.log("Tags value:", req.body.tags);

  if (req.body.tags && typeof req.body.tags === "string") {
    try {
      if (req.body.tags.startsWith("[") && req.body.tags.endsWith("]")) {
        req.body.tags = JSON.parse(req.body.tags);
        console.log("Parsed tags:", req.body.tags);
      }
    } catch (error) {
      console.log("Failed to parse tags:", error.message);
    }
  }

  const valid = validatePost(req.body);
  if (valid) {
    next();
  } else {
    console.log(validatePost.errors);
    const error = new Error("Post validation error");
    error.status = 400;
    error.message = validatePost.errors[0].message;
    next(error);
  }
}

module.exports = { postValidation };
