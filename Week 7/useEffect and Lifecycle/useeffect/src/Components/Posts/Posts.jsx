import "./Posts.css";
import { useEffect, useState } from "react";
import Post from "../Post/Post";

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [windowWidth]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data.slice(0, 10));
    } catch (error) {
      console.log(error.message);
    }
  };

  if (windowWidth < 600) {
    // setOnResize(true);
    return (
      <div className="postsResize">
        {posts.map((p, id) => {
          return <Post onResize={true} key={id} post={p} />;
        })}
      </div>
    );
  }

  return (
    <div className="Posts">
      {posts.map((p, id) => {
        return <Post onResize={false} key={id} post={p} />;
      })}
    </div>
  );
}

export default Posts;
