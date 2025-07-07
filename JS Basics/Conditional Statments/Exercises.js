//Ex1
let age = 20;
if (age >= 18) {
  console.log("You are old enough to vote!");
}

//Ex2
let score = 85;
if (score >= 90) {
  console.log("You got an A!");
} else if (score >= 80) {
  console.log("You got a B!");
} else if (score >= 70) {
  console.log("You got a C!");
} else if (score >= 60) {
  console.log("You got a D!");
} else {
  console.log("You got an F!");
}

//Ex3
let temperature = 20;
let weather = "sunny";
if (weather === "sunny") {
  if (temperature > 21) {
    console.log("Go to the beach");
  } else if (temperature > 15) {
    console.log("Go for a walk");
  } else {
    console.log("Stay inside and read");
  }
} else if (weather === "rainy") {
  console.log("Watch a movie indoor");
} else if (weather === "cloudy") {
  if (temperature > 21) {
    console.log("Go Hiking");
  } else {
    console.log("Visit a museum");
  }
}

//Ex4
let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13) {
  console.log("You can create an account");
} else {
  if (usernameLength < 5) {
    console.log("Username must be at least 5 characters long");
  }
  if (passwordLength < 8) {
    console.log("Password must be at least 8 characters long");
  }
  if (userAge < 13) {
    console.log("You must be at least 13 years old to create an account");
  }
}

//Ex5
let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

if (customerType === "vip") {
  console.log("You get a 20% discount on your purchase!");
} else if (customerType === "premium") {
  if (dayOfWeek === 6 || dayOfWeek === 0) {
    console.log("You get a 15% discount on your purchase!");
  } else {
    console.log("You get a 10% discount on your purchase!");
  }
} else {
  if (purchaseAmount > 100) {
    console.log("You get a 10% discount on your purchase!");
  } else if (purchaseAmount > 50) {
    console.log("You get a 5% discount on your purchase!");
  } else {
    console.log("No discount available for your purchase.");
  }
}

//Ex6
let year = 2024;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is a leap year.`);
    } else {
      console.log(`${year} is not a leap year.`);
    }
  } else {
    console.log(`${year} is a leap year.`);
  }
} else {
  console.log(`${year} is not a leap year.`);
}
