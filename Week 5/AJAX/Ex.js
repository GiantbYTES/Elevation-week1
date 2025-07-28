//Ex1
const oldFetch = function () {
  $.ajax({
    method: "GET",
    url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};

function fetch1(ISBN) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
}

//Ex2
function fetch2(queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
}

//Ex3
function fetch3(queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
      const items = data.items;
      items.forEach((t) => {
        console.log(t.volumeInfo.title);
      });
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
}

//Ex4
function returnCat() {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?q=cat&api_key=0iHaoqJOn65KXvVkqDaeVia2vAU51WBE&limit=5`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.data);
      const container = document.getElementById("container");
      const url = data.data[0].embed_url;
      const gif = document.createElement("iframe");
      gif.setAttribute("src", url);
      container.appendChild(gif);
    })
    .catch((err) => console.log(err));
}

//Ex5
async function returnGIF() {
  const input = document.getElementById("search-input");
  console.log(input.value);
  return fetch(
    `https://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=0iHaoqJOn65KXvVkqDaeVia2vAU51WBE&limit=1`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const container = document.getElementById("gif-container");
      if (container.hasChildNodes) {
        container.innerHTML = "";
      }
      const url = data.data[0].embed_url;
      const gif = document.createElement("iframe");
      gif.setAttribute("src", url);
      container.appendChild(gif);
    })
    .catch((err) => console.log(err));
}
