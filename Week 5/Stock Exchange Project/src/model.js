require("dotenv").config();

const apiKey = process.env.API_KEY;

async function Model() {
  async function getCompanies(input) {
    const loader = document.getElementById("loader");
    loader.style.display = "block";
    try {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/search?query=${input}&limit=10&exchange=NASDAQ&apikey=${apiKey}`
      );
      if (!res.ok) {
        throw new Error("Can't reach data");
      }
      const data = await res.json();
      console.log("data: " + JSON.stringify(data));
      return data;
    } catch (error) {
      console.log(error.message);
    } finally {
      loader.style.display = "none";
    }
  }
  async function getDataOfCompanies(input) {
    const data = await getCompanies(input);
    const toSearch = [];
    data.forEach((c) => {
      toSearch.push(c.symbol);
    });
    const symbolSearch = toSearch.join();
    try {
      const res = await fetch(
        `https://financialmodelingprep.com/api/v3/profile/${symbolSearch}?apikey=${apiKey}`
      );
      if (!res.ok) {
        throw new Error("Can't reach companies data");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  return { getDataOfCompanies };
}
export default Model;
