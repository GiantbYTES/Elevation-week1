function Renderer() {
  function renderPage(user, quote, pokemon, about, friends) {
    renderUser(user);
    renderQuote(quote);
    renderPokemon(pokemon);
    renderAbout(about);
    renderFriends(friends);
  }
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
    location.innerHTML = `${user.city}, ${user.state}`;
    profileContainer.appendChild(location);
  }
  function renderQuote(quote) {
    const quoteContainer = document.getElementById("favorite-quote");
    //add title
    const quoteTitle = document.createElement("p");
    quoteTitle.setAttribute("id", "quote-title");
    quoteTitle.innerHTML = "Favorite quote:";
    quoteContainer.appendChild(quoteTitle);
    //add quote
    const quoteText = document.createElement("div");
    quoteText.setAttribute("id", "quote");
    quoteText.innerHTML = quote;
    quoteContainer.appendChild(quoteText);
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
    //add title
    const pokemonTitle = document.createElement("p");
    pokemonTitle.setAttribute("id", "pokemon-title");
    pokemonTitle.innerHTML = "Favorite Pokemon:";
    pokemonNameContainer.appendChild(pokemonTitle);
    //add name
    const name = document.createElement("div");
    name.setAttribute("id", "pokemon-name");
    name.innerHTML = pokemon.name;
    pokemonNameContainer.appendChild(name);
  }
  function renderAbout(about) {
    const aboutContainer = document.getElementById("about-container");
    //add title
    const aboutTitle = document.createElement("p");
    aboutTitle.setAttribute("id", "about-title");
    aboutTitle.innerHTML = "About me";
    aboutContainer.appendChild(aboutTitle);
    //add about
    const aboutText = document.createElement("div");
    aboutText.setAttribute("id", "about");
    aboutText.innerHTML = about;
    aboutContainer.appendChild(aboutText);
  }
  function renderFriends(friends) {
    const friendsList = document.getElementById("friends-list");
    friendsList.innerHTML = "Friends";
    friends.forEach((f) => {
      const name = document.createElement("li");
      name.setAttribute("class", "friend");
      name.innerHTML = `${f.fName} ${f.lName}`;
      friendsList.appendChild(name);
    });
  }
  return {
    renderPage,
    renderUser,
    renderQuote,
    renderPokemon,
    renderAbout,
    renderFriends,
  };
}

export default Renderer;
