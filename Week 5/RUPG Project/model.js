async function getUser() {
  try {
    const res = await fetch(`https://randomuser.me/api/`);
    if (!res.ok) {
      throw new Error("User not created");
    }
    const data = await res.json();
    const picture = data.results[0].picture.large;
    const firstName = data.results[0].name.first;
    const lastName = data.results[0].name.last;
    const city = data.results[0].location.city;
    const state = data.results[0].location.state;
    const mainUser = {
      picture,
      fName: firstName,
      lName: lastName,
      city,
      state,
    };
    console.log(mainUser);
    return mainUser;
  } catch (error) {
    console.log(error.message);
  }
}

async function getFriends() {
  try {
    const friends = [];
    for (let i = 0; i < 6; i++) {
      const res = await fetch(`https://randomuser.me/api/`);
      if (!res.ok) {
        throw new Error("Friend not created");
      }
      const data = await res.json();
      const firstName = data.results[0].name.first;
      const lastName = data.results[0].name.last;
      friends.push({ fName: firstName, lName: lastName });
    }
    console.log(friends);
    return friends;
  } catch (error) {
    console.log(error.message);
  }
}

async function getQuote() {
  try {
    const res = await fetch(`https://api.kanye.rest`);
    if (!res.ok) {
      throw new Error("Can't get quote");
    }
    const data = await res.json();
    const quote = data.quote;
    console.log(quote);
    return quote;
  } catch (error) {
    console.log(error.message);
  }
}
