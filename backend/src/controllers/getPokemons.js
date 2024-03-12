const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

const { fetchPokemonByName } = require("./getPokemonByName");
const getPokemonFromDatabase = require("./getPokemonsFromDatabase");

const getPokemons = async (req, res) => {
  try {
    const { data } = await axios(`${URL}`);
    const databasePokemon = await getPokemonFromDatabase();
    const allData = [...data.results, ...databasePokemon];
    if (data.results[0]) {
      const slicedData = allData.slice(req.query.start, req.query.end);
      const pokemons = slicedData.map(async (pokemon, index) => {
        const pokemonData = await fetchPokemonByName(pokemon.name);
        if (pokemonData) {
          return {
            name: pokemon.name,
            id: index + 1 + Number(req.query.start),
            type1: pokemonData.types[0].type.name,
            type2: pokemonData.types[1]?.type.name,
            image: pokemonData.sprites.front_default,
          };
        } else {
          return {
            name: pokemon.name,
            id: index + 1 + Number(req.query.start),
            type1: pokemon.type1,
            type2: pokemon.type2,
            image: pokemon.image,
          };
        }
      });
      const resolvedPokemons = await Promise.all(pokemons);
      res.status(200).json([...resolvedPokemons]);
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = getPokemons;
