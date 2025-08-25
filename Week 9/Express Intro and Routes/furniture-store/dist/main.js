const fetchFurnitureData = function () {
  let name = $("#furniture-name").val();

  $.get(`priceCheck/${name}`, function (furnitureData) {
    // console.log(JSON.parse(furnitureData).price);
    $("body").append(`<div>price: ${furnitureData.price}</div>`);
  });
};

const buyFurniture = function () {
  let name = $("#furnit-name").val();

  $.get(`buy/${name}`, function (furnitureData) {
    $("body").append(
      `<div>Congratulations, you've just bought ${furnitureData.name} for ${furnitureData.price}. There are ${furnitureData.inventory} left now in the store.</div>`
    );
  });
};
