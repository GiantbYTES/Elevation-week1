function Renderer() {
  function renderPosts(posts) {
    $("#posts").empty();
    posts.forEach((p) => {
      const postsList = document.getElementById("posts");
      const newPost = document.createElement("div");
      newPost.setAttribute("class", "post");
      postsList.appendChild(newPost);
      $(newPost).append(
        `<div class="post-text">${p.text}</div>
         <div class="delete" data-id="${p.id}">Delete Post</div>
         <div class="comments">
         </div>
         <input type="text" placeholder="Got something to say?" class="comment-input" data-id="${p.id}">
         <button class="comment-button" data-id="${p.id}" >Comment</button>`
      );
      const commentsDiv = newPost.querySelector(".comments");
      p.comments.forEach((c) => {
        $(commentsDiv)
          .append(`<div class="comment-container"> <div class="comment" data-id="${c.id}">${c.text}</div>
                   <div class="delete-comment" data-id="${c.id}" parent-id="${p.id}">X</div></div>`);
      });
    });
  }
  return {
    renderPosts,
  };
}

export default Renderer;
