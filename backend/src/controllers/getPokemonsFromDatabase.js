const { Pokemon } = require("../db");

const getPokemonFromDatabase = () => {
  return Pokemon.findAll()
    .then((databaseData) => {
      const formattedData = databaseData.map((pokemon) => ({
        // id: pokemon.id,
        name: pokemon.name,
        type1: pokemon.type1,
        type2: pokemon.type2,
        image: pokemon.image,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
      }));
      console.log("formattedData >>> " + JSON.stringify(formattedData));
      return formattedData;
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = getPokemonFromDatabase;
