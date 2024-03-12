const { Pokemon } = require("../db");
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonById = async (req, res) => {
  try {
    const { data } = await axios(`${URL}/${req.params.id}`);
    const { id, name, sprites, stats, height, weight, types } = data;
    res.status(200).json({
      id,
      name,
      sprites,
      stats,
      height,
      weight,
      types,
    });
    // res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemonById;
