/**
 * This code snippet is a router configuration for an Express application.
 * It imports various controllers for handling different routes related to Pokemon data.
 * The router is configured with different HTTP methods and corresponding route paths.
 * It exports the configured router for use in the main application.
 */

const { Router } = require("express");

const { getPokemons } = require("../controllers/getPokemons");
const { getFilteredPokemon } = require("../controllers/getPokemons");
const { getPokemonByName } = require("../controllers/getPokemonByName");
const getPokemonById = require("../controllers/getPokemonById");
const getTypes = require("../controllers/getTypes");
const createPokemon = require("../controllers/createPokemon");

const router = Router();

router.get("/pokemons", getPokemons);
router.get("/pokemonsFiltered", getFilteredPokemon);
router.get("/pokemons/:name", getPokemonByName);
router.get("/pokemons/:id", getPokemonById);
router.post("/pokemons", createPokemon);
router.get("/types", getTypes);

module.exports = router;
