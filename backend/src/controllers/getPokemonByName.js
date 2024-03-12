const { Pokemon } = require("../db");
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemonByName = async (name) => {
  try {
    const { data } = await axios(`${URL}/${name}`);
    const { id, sprites, stats, height, weight, types } = data;
    return {
      id,
      name,
      sprites,
      stats,
      height,
      weight,
      types,
    };
  } catch {}
  return null;
};

const getPokemonFromDb = async (name) => {
  const pokemon = await Pokemon.findOne({ where: { name } });
  return pokemon;
};

const getPokemonByName = async (req, res) => {
  try {
    let pokemon = await getPokemonFromDb(req.params.name);
    if (!pokemon) {
      pokemon = await fetchPokemonByName(req.params.name);
    }
    console.log(pokemon);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  getPokemonByName,
  fetchPokemonByName,
};
