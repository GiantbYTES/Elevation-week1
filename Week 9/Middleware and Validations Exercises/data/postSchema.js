const postSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    content: { type: "string", maxLength: 1000, minLength: 10 },
    tags: { type: "array", items: { type: "string" }, minItems: 0 },
    title: { type: "string", maxLength: 100, minLength: 5 },
  },
  required: ["content", "title"],
  additionalProperties: false,
};

module.exports = { postSchema };
