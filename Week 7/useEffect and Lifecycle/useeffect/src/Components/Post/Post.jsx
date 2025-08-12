import "./Post.css";

export function Post({ onResize, post }) {
  if (onResize) {
    return (
      <div className="resizedPost">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  }
  return (
    <div className="Post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
