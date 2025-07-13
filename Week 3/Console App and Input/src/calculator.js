const num1 = `${process.argv[2]}`;
let op = process.argv[3];
if (op !== "+" && op !== "-" && op !== "*") {
  op = "/";
}
const num2 = `${process.argv[4]}`;
const toEval = `${num1} ${op} ${num2}`;
console.log(num1 + " " + op + " " + num2 + " = " + eval(toEval));
