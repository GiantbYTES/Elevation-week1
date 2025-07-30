const wisdom = JSON.parse(localStorage.getItem("wisdom")) || [];
function displayText() {
  const container = document.getElementById("container");
  const input = document.getElementById("inputField");
  const text = document.createElement("p");
  text.innerHTML = input.value;
  container.appendChild(text);
  wisdom.push({ text: input.value });
  input.value = null;
  if (wisdom.length % 2 === 0) {
    const text = JSON.stringify(wisdom);
    localStorage.setItem("wisdom", text);
  }
  console.log(wisdom);
}

function onStart() {
  const text = localStorage.getItem("wisdom") || "[]";
  const parsedText = JSON.parse(text);

  const para = document.getElementById("displayText");
  let id = 1;
  parsedText.forEach((t) => {
    const newContainer = document.createElement("div");
    newContainer.setAttribute("class", "wisdom-container");

    id++;
    para.appendChild(newContainer);
    const newText = document.createElement("p");
    newText.innerHTML = t.text;
    newContainer.appendChild(newText);
    const deleteText = document.createElement("div");
    deleteText.innerHTML = "x";
    deleteText.setAttribute("class", "delete-sign");
    deleteText.setAttribute("data-id", `t${id}`);
    newContainer.appendChild(deleteText);
  });
}

function clearWisdom() {
  localStorage.removeItem("wisdom");
  $("#displayText").empty();
}

onStart();

//Delete wisdom
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-sign")) {
    const postID = event.target.getAttribute("data-id");
    console.log(postID);
    const id = parseInt(postID.slice(1));
    console.log(id);
    wisdom.splice(id - 2, 1);
    console.log(wisdom);
    const text = JSON.stringify(wisdom);
    localStorage.setItem("wisdom", text);
  }
});
