import Renderer from "./render.js";
import User from "./model.js";

const user = await User();
const renderer = Renderer();

async function newUser() {
  const profile = await user.getUser();
  const friends = await user.getFriends();
  const quote = await user.getQuote();
  const pokemon = await user.getPokemon();
  const about = await user.getText();

  renderer.renderPage(profile, quote, pokemon, about, friends);
}
//Generate user
const generateButton = document.getElementById("generate-user-button");
generateButton.addEventListener("click", () => {
  renderer.emptyPage();
  newUser();
});

newUser();
