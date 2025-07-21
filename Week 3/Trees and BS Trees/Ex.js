class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }
  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }

  findNode(value) {
    if (this.value === value) {
      console.log(true);
    } else if (value < this.value && this.leftChild) {
      return this.leftChild.findNode(value);
    } else if (value > this.value && this.rightChild) {
      return this.rightChild.findNode(value);
    } else {
      console.log(false);
    }
  }

  findCommonParent(x, y) {
    if (this.value === x || this.value === y) {
      return this.value;
    }
    const left = this.leftChild ? this.leftChild.findCommonParent(x, y) : null;
    const right = this.rightChild
      ? this.rightChild.findCommonParent(x, y)
      : null;

    if (left && right) {
      return this.value;
    } else if (left) {
      return left;
    } else {
      return right;
    }
  }
  removeNode(parent, value) {
    if (this.value === value) {
      if (!this.leftChild && !this.rightChild) {
        return null;
      } else if (this.leftChild && !this.rightChild) {
        parent.leftChild = this.leftChild;
        return parent.leftChild;
      } else if (!this.leftChild && this.rightChild) {
        parent.rightChild = this.rightChild;
        return parent.rightChild;
      } else {
        let maxLeft = this.leftChild;
        while (maxLeft.rightChild) {
          maxLeft = maxLeft.rightChild;
        }
        this.value = maxLeft.value;
        this.leftChild = this.leftChild.removeNode(this, maxLeft.value);
      }
    } else if (value < this.value && this.leftChild) {
      this.leftChild = this.leftChild.removeNode(this, value);
    } else if (value > this.value && this.rightChild) {
      this.rightChild = this.rightChild.removeNode(this, value);
    }
    return this;
  }
}
const letters = ["H", "E", "S", "G", "L", "Y", "I"];

const bSTree = new BSNode();

//insert nodes (same as in lesson)
letters.forEach((letter) => {
  bSTree.insertNode(letter);
});

//Use the following to test
bSTree.findNode("H"); // should print true
bSTree.findNode("G"); // should print true
bSTree.findNode("Z"); // should print false
bSTree.findNode("F"); // should print false
bSTree.findNode("y"); // should print false - we didn't make the tree case sensitive!

const lettersArr = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

const newBSTree = new BSNode();

lettersArr.forEach((letter) => {
  newBSTree.insertNode(letter);
});

console.log(newBSTree.findCommonParent("B", "I")); //should return "H"
console.log(newBSTree.findCommonParent("B", "G")); //should return "E"
console.log(newBSTree.findCommonParent("B", "L")); //should return "J"
console.log(newBSTree.findCommonParent("L", "Y")); //should return "R"
console.log(newBSTree.findCommonParent("E", "H")); //should return "J"

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied)

let nodeWithTwoChildren = new BSNode();
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5)
