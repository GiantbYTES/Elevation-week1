const commentSchema = {
  type: "object",
  properties: {
    content: { type: "string", minLength: 5, maxLength: 500 },
    email: { type: "string", format: "email" },
    postId: { type: "string" },
  },
  required: ["content", "email", "postId"],
  additionalProperties: false,
};

module.exports = { commentSchema };
