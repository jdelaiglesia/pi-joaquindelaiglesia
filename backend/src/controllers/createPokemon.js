const { Pokemon } = require("../db");

// Ruta para crear un nuevo Pokémon
const createPokemon = async (req, res) => {
  try {
    const {
      name,
      type1,
      type2,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    } = req.body;

    const newPokemon = await Pokemon.findOrCreate({
      where: { name },
      defaults: {
        name,
        type1,
        type2,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
      },
    });
    res.status(201).json(newPokemon);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el Pokémon" });
  }
};

module.exports = createPokemon;
