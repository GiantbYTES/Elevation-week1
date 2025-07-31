import Renderer from "./render.js";
import Model from "./model.js";

const model = await Model();
const renderer = Renderer();

async function getCom() {
  const input = document.getElementById("search-input");
  console.log(input);
  const companies = await model.getCompanies(input.value);
  console.log("getCom output: " + companies);
  return companies;
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", async () => {
  const companies = await getCom();
  console.log(companies);
  renderer.renderCompanyList(companies);
});
