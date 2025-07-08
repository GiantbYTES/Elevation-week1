//Ex1
function isEven(num) {
  return num % 2 === 0;
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Ex2
function oddNums(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!isEven(arr[i])) {
      console.log(arr[i]);
    }
  }
}
oddNums(nums);

//Ex3
function checkExists(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}
console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));

//Ex4
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2));

//Ex5
const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

function increaseByNameLength(money, name) {
  return name.length * money;
}

function makeRegal(name) {
  return `His Royal Highness, ${name}`;
}

turnToKing("martin luther", 100);

//Ex6
function isArmstrongNum(num) {
  let tmp = num;
  let sum = 0;
  let carry;
  const pow = `${num}`.length;
  for (let i = 0; i < pow; i++) {
    carry = tmp % 10;
    tmp = Math.floor(tmp / 10);
    sum = sum + Math.pow(carry, pow);
  }
  if (sum === num) {
    console.log(num);
  }
}
for (let i = 100; i < 1000; i++) {
  isArmstrongNum(i);
}
