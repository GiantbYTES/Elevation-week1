const coffeeShop = {
  beans: 40,
  money: 50,
  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 5 },
    doubleShot: { beanRequirement: 15, price: 5 },
    frenchPress: { beanRequirement: 12, price: 5 },
  },
  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if (!this.drinkRequirements[drinkType]) {
      console.log(`Sorry, we don't make ${drinkType}`);
    } else {
      let beansLeft =
        this.beans - this.drinkRequirements[drinkType].beanRequirement;
      if (beansLeft < 0) {
        console.log("Sorry, we're all out of beans");
      } else {
        this.beans = beansLeft;
      }
    }
  },
  buyBeans: function (numBeans) {
    this.money = this.money - numBeans / 10;
    this.beans = this.beans + numBeans;
  },
  buyDrink: function (drinkType) {
    if (
      this.drinkRequirements[drinkType] &&
      this.beans - this.drinkRequirements[drinkType].beanRequirement > 0
    ) {
      this.money = this.money + this.drinkRequirements[drinkType].price;
    }
    this.makeDrink(drinkType);
  },
};

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should console "Sorry, we're all out of beans"
