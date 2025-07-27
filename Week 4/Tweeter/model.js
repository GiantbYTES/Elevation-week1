function Tweeter() {
  const posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't worry second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];
  let postIdCounter = 2;
  let commentIdCounter = 6;

  function getPosts() {
    return posts;
  }

  function addPost(text) {
    posts.push({ text: text, id: `p${++postIdCounter}`, comments: [] });
  }

  function removePost(postID) {
    for (let i = 0; i < posts.length; i++) {
      const p = posts[i];
      if (p.id === postID) {
        posts.splice(i, 1);
      }
    }
  }

  function addComment(postID, text) {
    for (let i = 0; i < posts.length; i++) {
      const p = posts[i];
      if (p.id === postID) {
        p.comments.push({ id: `c${++commentIdCounter}`, text: text });
      }
    }
  }

  function removeComment(postID, commentID) {
    for (let i = 0; i < posts.length; i++) {
      const p = posts[i];
      if (p.id === postID) {
        for (let j = 0; j < p.comments.length; j++) {
          const c = p.comments[j];
          if (c.id === commentID) {
            p.comments.splice(j, 1);
          }
        }
      }
    }
  }
  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
}

const tweeter = Tweeter();

// Test adding a post
tweeter.addPost("This is my own post!");
// Should add: {text: "This is my own post!", id: "p3", comments: []}

// Test removing a post
tweeter.removePost("p1");
// Should only have two posts left

// Test adding comments
tweeter.addComment("p3", "Damn straight it is!");
tweeter.addComment("p2", "Second the best!");

// Test removing comments
tweeter.removeComment("p2", "c6");

export default Tweeter;
