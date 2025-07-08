//Ex1
const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};

const pushPull = function (callback) {
  callback();
};

pushPull(push); //should print "pushing it!"
pushPull(pull); //should print "pulling it!"

//Ex2
const time = new Date();

const returnTime = function (time) {
  console.log("The current time is: " + time);
};

const getTime = function (callback) {
  callback(time);
};

getTime(returnTime);

//Ex3
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const logData = function (data) {
  console.log(data);
};

displayData(console.error, logData, "I like to party");

//Ex4
const func = (param1, param2, param3) => {
  return param1 + param2 + param3;
};

console.log(func(3, 4, 5));

//Ex5
const capitalize = (str) => {
  console.log(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

capitalize("bOb"); // returns Bob
capitalize("TAYLOR"); // returns Taylor
capitalize("feliSHIA"); // returns Felishia

//Ex6
const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

const commentOnWeather = (temp) => {
  console.log(`It's ${determineWeather(temp)}`);
};

commentOnWeather(30); //returns "It's hot"
commentOnWeather(22); //returns "It's cold"
