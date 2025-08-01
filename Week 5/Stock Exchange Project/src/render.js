function Renderer() {
  function renderCompanyList(companies) {
    $("#company-list").empty();
    const companyList = document.getElementById("company-list");
    console.log("companies: " + companies);
    let id = 1;
    companies.forEach((c) => {
      const change = parseFloat(c.changes).toFixed(2);
      const up = "price-change-up";
      const down = "price-change-down";
      let classChange = "";
      if (change < 0) {
        classChange = down;
      } else {
        classChange = up;
      }
      $(companyList).append(
        `<li class="company-name"><img class="company-image" src="${c.image}"/><a href="company.html?symbol=${c.symbol}">${c.companyName} (${c.symbol})<div class="${classChange}">(${change}%)</div></a></li>`
      );
    });
  }
  return { renderCompanyList };
}

export default Renderer;
