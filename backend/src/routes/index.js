const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getPokemons = require("../controllers/getPokemons");
const { getPokemonByName } = require("../controllers/getPokemonByName");
const getPokemonById = require("../controllers/getPokemonById");
const getTypes = require("../controllers/getTypes");
const createPokemon = require("../controllers/createPokemon");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", getPokemons);
router.get("/pokemons/:name", getPokemonByName);
router.get("/pokemons/:id", getPokemonById);
router.post("/pokemons", createPokemon);
router.get("/types", getTypes);

module.exports = router;