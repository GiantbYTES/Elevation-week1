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
  function renderPokemon(pokemon) {
    //Image
    const pokemonImageContainer = document.getElementById(
      "pokemon-image-container"
    );
    const pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("id", "pokemon-image");
    pokemonImage.setAttribute("src", pokemon.imgURL);
    pokemonImageContainer.appendChild(pokemonImage);
    //Name
    const pokemonNameContainer = document.getElementById(
      "pokemon-name-container"
    );
    const name = document.createElement("div");
    name.setAttribute("id", "pokemon-name");
    name.innerHTML = pokemon.name;
    pokemonNameContainer.appendChild(name);
  }
  return {
    renderPage,
    renderUser,
    renderQuote,
    renderPokemon,
  };
}
