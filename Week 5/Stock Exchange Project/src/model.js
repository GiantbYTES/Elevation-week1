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
      // also https://financialmodelingprep.com/api/v3/profile/AAON,AAPL,MSFT,GOOG?apikey=1xTipGBKJJe1z7zcYpslPWvDxowbuBZl
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
  return { getCompanies };
}
export default Model;
