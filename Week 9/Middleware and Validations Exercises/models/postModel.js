const fs = require("fs");
const { nanoid } = require("nanoid");

async function getPosts() {
  const data = await fs.promises.readFile("./data/posts.json");
  return JSON.parse(data);
}

async function getPostById(id) {
  const posts = await getPosts();
  const post = posts.find((post) => post.id === id);
  return post;
}

async function addPost(newPost) {
  const posts = await getPosts();
  newPost.id = nanoid(7);
  posts.push(newPost);
  await fs.promises.writeFile("./data/posts.json", JSON.stringify(posts));
  return newPost;
}

async function getComments() {
  try {
    const data = await fs.promises.readFile("./data/comments.json");
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return empty array
    return [];
  }
}

async function addComment(commentData) {
  const comments = await getComments();
  const newComment = {
    id: nanoid(7),
    content: commentData.content,
    email: commentData.email,
    postId: commentData.postId,
    createdAt: new Date().toISOString(),
  };
  comments.push(newComment);
  await fs.promises.writeFile(
    "./data/comments.json",
    JSON.stringify(comments, null, 2)
  );
  return newComment;
}

module.exports = { getPosts, getPostById, addPost, addComment, getComments };
