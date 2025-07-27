import Renderer from "./render.js";
import Tweeter from "./model.js";

const tweeter = Tweeter();
const renderer = Renderer();

// This should render the initial dummy data
renderer.renderPosts(tweeter.getPosts());

//Add new post
const postText = document.getElementById("post-text");
const postButton = document.getElementById("add-post-button");
postButton.addEventListener("click", () => {
  if (postText.value !== "") {
    tweeter.addPost(postText.value);
    postText.value = null;
    renderer.renderPosts(tweeter.getPosts());
  }
});

//Delete post
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const postID = event.target.getAttribute("data-id");
    tweeter.removePost(postID);
    renderer.renderPosts(tweeter.getPosts());
  }
});

//Add new comment
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("comment-button")) {
    const postID = event.target.getAttribute("data-id");
    const commentText = document.querySelector(
      `[data-id="${postID}"][class="comment-input"]`
    );
    console.log(commentText);
    if (commentText.value !== "") {
      tweeter.addComment(postID, commentText.value);
      commentText.value = null;
      renderer.renderPosts(tweeter.getPosts());
    }
  }
});

//Delete comment
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-comment")) {
    const postID = event.target.getAttribute("parent-id");
    const commentID = event.target.getAttribute("data-id");
    // debugger;
    tweeter.removeComment(postID, commentID);
    renderer.renderPosts(tweeter.getPosts());
  }
});
