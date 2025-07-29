//Ex1

// Given Promise-based code:
function getUserByIdOLD(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then((user) => {
      console.log(`Found user: ${user.name} (${user.email})`);
      return user;
    })
    .catch((error) => {
      console.error("Error fetching user:", error.message);
      return null;
    });
}

async function getUserById(userId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!res.ok) {
      throw new Error("User not found");
    }
    const user = await res.json();
    console.log(`Found user: ${user.name} (${user.email})`);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null;
  }
}
// for (let i = 1; i < 11; i++) {
//   getUserById(i);
// }
// getUserById("999");

//Ex2

// Starter code structure:
async function getUserWithPosts(userId) {
  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data
  try {
    const res1 = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!res1.ok) {
      throw new Error("User not found");
    }
    const data1 = await res1.json();
    const res2 = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!res2.ok) {
      throw new Error("User not found");
    }
    const data2 = await res2.json();
    const toReturn = { user: data1, posts: data2 };
    return toReturn;
  } catch (error) {
    console.error(error.message);
  }
}

// for (let i = 1; i < 11; i++) {
//   getUserWithPosts(i);
// }
// getUserWithPosts("999");

//Ex3

async function dashboard() {
  try {
    const res1 = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!res1.ok) {
      throw new Error("Users not found");
    }
    const data1 = await res1.json();
    const res2 = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!res2.ok) {
      throw new Error("Posts not found");
    }
    const data2 = await res2.json();
    const res3 = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    if (!res3.ok) {
      throw new Error("Comments not found");
    }
    const data3 = await res3.json();
    const toReturn = {
      summary: {
        totalUsers: data1.length,
        totalPosts: data2.length,
        totalComments: data3.length,
        avgPostsPerUser: calcPostAvarge(data2),
        avgCommentsPerPost: calcCommentAvarge(data3),
      },
      topUsers: getTopThree(data1, data2, data3),
      recentPosts: getRecentPosts(data2),
    };
    console.log(toReturn);
    return toReturn;
  } catch (error) {
    console.log(error.message);
  }
}

function calcPostAvarge(posts) {
  return posts.length / posts[posts.length - 1].userId;
}

function calcCommentAvarge(comments) {
  return comments.length / comments[comments.length - 1].postId;
}

function getPostByUser(posts, userId, comments) {
  let sum = 0;
  let sumComments = 0;
  posts.forEach((u) => {
    if (u.userId === userId) {
      sum++;
      sumComments += getcommentsByPost(comments, u.id);
    }
  });
  return { userId, sum, sumComments };
}
function getcommentsByPost(comments, postId) {
  let sum = 0;
  comments.forEach((p) => {
    if (p.postId === postId) {
      sum++;
    }
  });
  return sum;
}
function getNameById(users, userId) {
  let toReturn;
  users.forEach((u) => {
    if (u.id === userId) {
      toReturn = u.name;
    }
  });
  return toReturn;
}
function objOfUser(users, allUsersArr, rank) {
  return {
    name: getNameById(users, allUsersArr[rank].userId),
    postCount: allUsersArr[rank].sum,
    commentCount: allUsersArr[rank].sumComments,
  };
}

function getTopThree(users, posts, comments) {
  const allUsersStats = [];
  users.forEach((u) => {
    const userStat = getPostByUser(posts, u.id, comments);
    allUsersStats.push(userStat);
  });
  allUsersStats.sort((a, b) => {
    b.sum - a.sum;
  });
  const top1 = objOfUser(users, allUsersStats, 0);
  const top2 = objOfUser(users, allUsersStats, 1);
  const top3 = objOfUser(users, allUsersStats, 2);
  return [top1, top2, top3];
}

function getRecentPosts(posts) {
  posts.sort((a, b) => {
    b.id - a.id;
  });
  const toReturn = [];
  for (let i = posts.length - 1; i > posts.length - 6; i--) {
    toReturn.push(posts[i]);
  }
  return toReturn;
}

dashboard();
