const Sequelize = require("sequelize");
const pokeData = require("./data/poke_data.json");

const sequelize = new Sequelize("mysql://root:tvnVbgMI@localhost:3307/pokemon");
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

async function addPokemon(id, name, type, height, weight) {
  await sequelize.query(
    `INSERT INTO pokemon VALUES(${id}, '${name}', '${type}', ${height}, ${weight})`
  );
}

async function addTrainer(name) {
  await sequelize.query(
    `INSERT IGNORE INTO trainer (t_name) VALUES('${name}')`
  );
}

async function addTown(name) {
  await sequelize.query(
    `INSERT IGNORE INTO town (town_name) VALUES('${name}')`
  );
}

async function addPokemonByTrainerTown(pokemon_id, trainer_name, town_name) {
  const [trainerResult] = await sequelize.query(
    `SELECT t_id FROM trainer WHERE t_name = '${trainer_name}'`
  );
  const [townResult] = await sequelize.query(
    `SELECT town_id FROM town WHERE town_name = '${town_name}'`
  );

  const trainer_id = trainerResult[0].t_id;
  const town_id = townResult[0].town_id;

  await sequelize.query(
    `INSERT INTO pokemon_trainer_town VALUES(${pokemon_id}, ${trainer_id}, ${town_id})`
  );
}

async function insertTables() {
  // pokemon table
  for (const p of pokeData) {
    await addPokemon(p.id, p.name, p.type, p.height, p.weight);
  }
  // trainer table & town table
  for (const p of pokeData) {
    for (const owner of p.ownedBy) {
      await addTrainer(owner.name);
      await addTown(owner.town);
    }
  }

  //pokemon_trainer_town table
  for (const p of pokeData) {
    for (const owner of p.ownedBy) {
      await addPokemonByTrainerTown(p.id, owner.name, owner.town);
    }
  }
}
// insertTables();

//Ex2
async function maxWeight() {
  const [result] = await sequelize.query(
    `SELECT MAX(p_weight) AS p_weight FROM pokemon`
  );

  const maxWeight = result[0].p_weight;

  const [heaviestPokemon] = await sequelize.query(
    `SELECT p_name FROM pokemon WHERE p_weight = ${maxWeight}`
  );

  return heaviestPokemon[0].p_name;
}

// (async () => {
//   const heaviest = await maxWeight();
//   console.log(heaviest);
// })();

//Ex3
async function findByType(type) {
  const [result] = await sequelize.query(
    `SELECT p_name FROM pokemon WHERE p_type = '${type}'`
  );
  const toReturn = result.map((p) => p.p_name);
  return toReturn;
}
// (async () => {
//   const list = await findByType("grass");
//   console.log(list);
// })();

//Ex4
async function findOwners(name) {
  const [pokemonId] = await sequelize.query(
    `SELECT p_id FROM pokemon WHERE p_name = '${name}'`
  );
  const [trainers_id] = await sequelize.query(
    `SELECT t_id FROM pokemon_trainer_town WHERE p_id = ${pokemonId[0].p_id}`
  );
  const trainersList = trainers_id.map((t) => t.t_id);
  const trainerNames = await Promise.all(
    trainersList.map(async (id) => {
      const [result] = await sequelize.query(
        `SELECT t_name FROM trainer WHERE t_id = ${id}`
      );
      return result[0].t_name;
    })
  );
  return trainerNames;
}

// (async () => {
//   const list = await findOwners("gengar");
//   console.log(list);
// })();

//Ex5
async function findRoster(name) {
  const [trainerId] = await sequelize.query(
    `SELECT t_id FROM trainer WHERE t_name = '${name}' `
  );
  const [pokemonListById] = await sequelize.query(
    `SELECT p_id FROM pokemon_trainer_town WHERE t_id = ${trainerId[0].t_id}`
  );
  const pokemonList = pokemonListById.map((p) => p.p_id);
  const pokemonNames = await Promise.all(
    pokemonList.map(async (id) => {
      const [result] = await sequelize.query(
        `SELECT p_name FROM pokemon WHERE p_id = ${id}`
      );
      return result[0].p_name;
    })
  );
  return pokemonNames;
}

(async () => {
  const list = await findRoster("Loga");
  console.log(list);
})();
