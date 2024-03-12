const { Type } = require("../db");
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/type";

const getTypes = async (req, res) => {
  try {
    const databaseData = await Type.findAll();
    if (Object.keys(databaseData).length === 0) {
      const { data } = await axios(`${URL}`);
      //Guardar data en la base de datos
      console.log(
        "Empty database, fetching data from API and saving in database..."
      );
      await Type.bulkCreate(data.results);
      res.status(200).json(await Type.findAll());
    } else {
      console.log("Data found in database, fetching data...");
      const data = await Type.findAll();
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTypes;
