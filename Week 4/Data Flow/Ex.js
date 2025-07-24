const posts = [
  { name: "John", text: "Happy Birthday!" },
  { name: "Jane", text: "Wishing you a wonderful birthday!" },
  { name: "Doe", text: "Have a fantastic birthday!" },
];

function render() {
  posts.forEach((p) => {
    const newPost = document.createElement("div");
    console.log(p);
    newPost.innerHTML = `${p.name}: ${p.text}`;
    document.body.appendChild(newPost);
  });
}

function onClickRender() {
  $("div").empty();
  const nameInput = document.getElementById("name");
  const textInput = document.getElementById("text");
  console.log(nameInput);
  console.log(textInput);
  posts.push({ name: nameInput.value, text: textInput.value });
  render();
  nameInput.value = null;
  textInput.value = null;
}
