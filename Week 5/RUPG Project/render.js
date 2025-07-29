function Renderer() {
  function renderPage(user, quote, pokemon, about, friends) {}
  function renderUser(user) {
    //Picture
    const picture = document.createElement("img");
    picture.setAttribute("id", "profile-picture");
    picture.setAttribute("src", user.picture);
    //First name and Last name
    const name = document.createElement("div");
    picture.setAttribute("id", "name");
    name.innerHTML = `${user.fName} ${user.lName}`;
    //City and State
    const location = document.createElement("div");
    picture.setAttribute("id", "location");
    location.innerHTML = `${user.city} ${user.state}`;
  }
  return {
    renderPage,
    renderUser,
  };
}
