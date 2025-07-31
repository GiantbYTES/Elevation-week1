function Renderer() {
  function renderCompanyList(companies) {
    const companyList = document.getElementById("company-list");
    console.log("companies: " + companies);
    let id = 1;
    companies.forEach((c) => {
      $(companyList).append(
        `<li class="company-name"><a href="/company.html?symbol=${c.symbol}">${c.name} (${c.symbol})</a></li>`
      );
    });
  }
  return { renderCompanyList };
}

export default Renderer;
