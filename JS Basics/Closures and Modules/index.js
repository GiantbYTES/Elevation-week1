//Ex1
const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const toSkewerCase = function (str) {
    return str.replaceAll(" ", "-");
  };
  return {
    capitalizeFirst: capitalizeFirst,
    toSkewerCase: toSkewerCase,
  };
};

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box")); //should return blue-box

//Ex2
const Bank = function () {
  let money = 500;
  const deposit = function (num) {
    money = money + num;
  };
  const showBalance = function () {
    console.log(money);
  };
  return {
    deposit: deposit,
    showBalance: showBalance,
  };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950

//Ex3

const SongsManager = function () {
  const songs = {};
  const addSong = function (name, url) {
    songs[name] = url.slice(32);
  };
  const getSong = function (name) {
    if (songs[name]) {
      return "https://www.youtube.com/watch?v=" + songs[name];
    } else {
      return "Song does not exist";
    }
  };
  return {
    addSong: addSong,
    getSong: getSong,
  };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

console.log(songsManager.getSong("sax")); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
