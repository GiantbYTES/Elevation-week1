function Renderer() {
  function renderPage(user, quote, pokemon, about, friends) {}
  function renderUser(user) {
    //Picture
    const imageContainer = document.getElementById("profile-image");
    const picture = document.createElement("img");
    picture.setAttribute("id", "profile-picture");
    picture.setAttribute("src", user.picture);
    imageContainer.appendChild(picture);
    //First name and Last name
    const profileContainer = document.getElementById("profile-info");
    const name = document.createElement("div");
    picture.setAttribute("id", "name");
    name.innerHTML = `${user.fName} ${user.lName}`;
    profileContainer.appendChild(name);
    //City and State
    const location = document.createElement("div");
    picture.setAttribute("id", "location");
    location.innerHTML = `${user.city} ${user.state}`;
    profileContainer.appendChild(location);
  }
  function renderQuote(quote) {
    const quoteContainer = document.getElementById("favorite-quote");
    const quote = document.createElement("div");
    quote.setAttribute("id", "quote");
    quote.innerHTML = quote;
    quoteContainer.appendChild(quote);
  }
  return {
    renderPage,
    renderUser,
    renderQuote,
  };
}
