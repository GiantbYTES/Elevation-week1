require("dotenv").config();

const apiKey = process.env.API_KEY;

async function getCompanies(input) {
  try {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/search?query=${input}&limit=10&exchange=NASDAQ&apikey=${apiKey}`
    );
    const data = res.json();
  } catch (error) {
    console.log(error.message);
  }
}
