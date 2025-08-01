function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
const companySymbol = getUrlParameter("symbol");
console.log(companySymbol);

async function getData(symbol) {
  loader.style.display = "block";
  try {
    const res = await fetch(
      `https://financialmodelingprep.com//api/v3/company/profile/${symbol}?apikey=${apiKey}`
    );
    if (!res.ok) {
      throw new Error("Can't reach data");
    }
    const data = await res.json();
    const resChart = await fetch(
      `https://financialmodelingprep.com//api/v3/historical-price-full/${symbol}?serietype=line&apikey=${apiKey}`
    );
    if (!resChart.ok) {
      throw new Error("Can't reach history of stock price data");
    }
    const chartData = await resChart.json();
    console.log(data);
    displayData(data, chartData);
  } catch (error) {
    console.log(error.message);
  } finally {
    loader.style.display = "none";
  }
}

function displayData(data, cData) {
  //name
  const name = data.profile.companyName;
  const symbol = data.symbol;
  $("#company-info").append(`
    <div id="company-name-container" class="cont">
    <p id="company-name">${name}&nbsp<p id="company-stock-symbol">(${symbol})</p></div>`);
  //stock price
  const price = data.profile.price;
  const change = parseFloat(data.profile.changesPercentage).toFixed(2);
  console.log("change:" + change);
  $("#company-info")
    .append(`<div id="company-stock-price-container" class="cont">
        <p id="company-stock-price-title" class="title">Stock Price: $</p>
        <p id="company-stock-price">${price}&nbsp<p id="change-per">(${change}%)</p></p></div>`);
  if (change < 0) {
    document.getElementById("change-per").style.color = "red";
  } else {
    document.getElementById("change-per").style.color = "green";
  }
  //chart
  let chartData = cData;
  $("#company-info").append(
    `<canvas id="stockChart" width="600" height="400"></canvas>`
  );
  getChart(chartData);
  //ceo
  const ceo = data.profile.ceo;
  $("#company-info").append(`<div id="company-ceo-container" class="cont">
        <p id="company-ceo-title" class="title">CEO:&nbsp;</p>
        <p id="company-ceo"> ${ceo}</p></div>`);
  //website
  const website = data.profile.website;
  $("#company-info").append(`<div id="company-website-container" class="cont">
        <p id="company-website"><a href="${website}" class="website">${website}</a></p></div>`);
  //description
  const description = data.profile.description;
  $("#company-info")
    .append(`<div id="company-description-container" class="cont">
        <p id="company-description"> ${description}</p></div>`);

  //industry
  const industry = data.profile.industry;
  $("#company-info").append(`<div id="company-industry-container" class="cont">
        <p id="company-industry-title" class="title">Industry:&nbsp;</p>
        <p id="company-industry">${industry}</p></div>`);
}

function getChart(data) {
  // Sort dates from oldest to newest
  const sortedData = data.historical.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // Extract labels (dates) and values (closing prices)
  const labels = sortedData.map((entry) => entry.date);
  const prices = sortedData.map((entry) => entry.close);

  // Create chart
  const ctx = document.getElementById("stockChart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels, // Dates
      datasets: [
        {
          label: `${data.symbol} Closing Price`,
          data: prices, // Closing prices
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: "Date",
          },
        },
        y: {
          title: {
            display: true,
            text: "Price (USD)",
          },
        },
      },
    },
  });
}

getData(companySymbol);
