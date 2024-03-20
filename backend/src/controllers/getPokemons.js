/**
 * Retrieves a list of pokemons based on the specified query parameters.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} A promise that resolves to the list of pokemons.
 * @throws {Error} If there is an error retrieving the pokemons.
 *
 * @example
 * Request
 * GET /pokemons?start=0&end=10
 *
 * Response
 * [
 *   {
 *     name: "bulbasaur",
 *     id: 1,
 *     type1: "grass",
 *     type2: "poison",
 *     image: "https://pokeapi.co/media/sprites/pokemon/1.png"
 *   },
 *   ...
 * ]
 */

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
      // const slicedData = allData.slice(req.query.start, req.query.end);
      const pokemons = allData.map(async (pokemon, index) => {
        const pokemonData = await fetchPokemonByName(pokemon.name);
        if (pokemonData) {
          return {
            name: pokemon.name,
            id: index + 1,
            type1: pokemonData.types[0].type.name,
            type2: pokemonData.types[1]?.type.name,
            image: pokemonData.sprites.front_default,
          };
        } else {
          return {
            name: pokemon.name,
            id: index + 1,
            type1: pokemon.type1,
            type2: pokemon.type2,
            image: pokemon.image,
          };
        }
      });
      const resolvedPokemons = await Promise.all(pokemons);
      res
        .status(200)
        .json({ pokemons: resolvedPokemons, count: allData.length });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getFilteredPokemon = async (req, res) => {
  try {
    const { data } = await axios(`${URL}`);
    const databasePokemon = await getPokemonFromDatabase();
    const allData = [...data.results, ...databasePokemon];
    if (data.results[0]) {
      const pokemons = allData.map(async (pokemon, index) => {
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
      const filteredPokemons = resolvedPokemons.filter((pokemon) => {
        return pokemon.type1.includes(req.query.filter);
      });
      console.log(filteredPokemons);
      if (req.query.filter !== "all") {
        // const slicedData = filteredPokemons.slice(
        //   req.query.start,
        //   req.query.end
        // );
        res
          .status(200)
          .json({ pokemons: filteredPokemons, count: filteredPokemons.length });
      } else {
        // const slicedData = resolvedPokemons.slice(
        //   req.query.start,
        //   req.query.end
        // );
        res
          .status(200)
          .json({ pokemons: resolvedPokemons, count: resolvedPokemons.length });
      }
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { getPokemons, getFilteredPokemon };
