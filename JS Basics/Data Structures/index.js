//Ex1

class UniqueArray {
  constructor() {
    this.uniqueStuff = new Map();
    this.uniqueLength = 0;
  }

  add(item) {
    if (typeof item === "object") {
      item = JSON.stringify(item);
    }
    if (!this.uniqueStuff.has(item)) {
      this.uniqueStuff.set(item, this.uniqueLength);
      this.uniqueLength++;
    }
  }

  showAll() {
    const items = [];
    for (const [item] of this.uniqueStuff) {
      items.push(`"${item}"`);
    }
    console.log(`[${items.join(",")}]`);
  }
  exists(item) {
    if (typeof item === "object") {
      item = JSON.stringify(item);
    }
    if (this.uniqueStuff.has(item)) {
      return true;
    } else {
      return false;
    }
  }
  get(index) {
    for (const item of this.uniqueStuff) {
      if (item[1] === index) {
        return item[0];
      }
    }
    return -1;
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
console.log(uniqueStuff.exists("toy")); //returns true
uniqueStuff.add("poster");
uniqueStuff.showAll();
uniqueStuff.add("hydrogen");
uniqueStuff.showAll();
console.log(uniqueStuff.get(2)); //prints "hydrogen"
