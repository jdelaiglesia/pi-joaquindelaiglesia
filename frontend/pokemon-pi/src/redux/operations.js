import axios from "axios";
import {
  setPokemons,
  setAllPokemons,
  getSpecificPokemon,
  clearPokemons,
  getTypes,
  createPokemon,
  getFilteredPokemons,
  setPage,
  setFilter,
  searchPokemon,
  getOrderedPokemons,
} from "./actions";

const URL = "http://localhost:3001/api";

export const fetchPokemons = (start, end) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${URL}/pokemons/?start=${start}&end=${end}`
    );
    dispatch(setPokemons(response.data));
    dispatch(setAllPokemons(response.data));
  } catch (error) {
    alert("Error in action creator fetchPokemons", error);
    console.log("Error in action creator fetchPokemons", error);
  }
};

export const fetchSpecificPokemon = (pokemonName) => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/pokemons/${pokemonName}`);
    dispatch(getSpecificPokemon(response.data));
  } catch (error) {
    alert("Error in action creator fetchSpecificPokemon", error);
    console.log("Error in action creator fetchSpecificPokemon", error);
  }
};

export const fetchTypes = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/types`);
    dispatch(getTypes(response.data));
  } catch (error) {
    alert("Error in action creator fetchTypes", error);
    console.log("Error in action creator fetchTypes", error);
  }
};

export const addPokemon = (pokemon) => async (dispatch, getState) => {
  try {
    const currentPokemons = getState().pokemons;

    const pokemonExists = currentPokemons.some(
      (currentPokemon) => currentPokemon.name === pokemon.name
    );

    if (pokemonExists) {
      alert("This Pokémon already exists!");
      return;
    }

    const response = await axios.post(`${URL}/pokemons`, pokemon);
    dispatch(createPokemon(response.data[0]));
  } catch (error) {
    alert("Error in action creator addPokemon", error);
    console.log("Error in action creator addPokemon", error);
  }
};

export const filterPokemon = (start, end, filterData) => async (dispatch) => {
  try {
    dispatch(setFilter(filterData));
    const response = await axios.get(
      `${URL}/pokemonsFiltered/?start=${start}&end=${end}&filter=${filterData}`
    );
    dispatch(getFilteredPokemons(response.data));
  } catch (error) {
    alert("Error in action creator filterPokemon", error);
    console.log("Error in action creator filterPokemon", error);
  }
};

export const orderPokemon = (orderPokemon) => async (dispatch, getState) => {
  try {
    const pokemons = [...getState().pokemons]; // crea una copia de pokemons
    if (orderPokemon === "id") {
      pokemons.sort((a, b) => a.id - b.id);
      dispatch(getOrderedPokemons(pokemons));
      return;
    } else if (orderPokemon === "desc") {
      pokemons.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
      dispatch(getOrderedPokemons(pokemons));
      return;
    } else if (orderPokemon === "asc") {
      pokemons.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      dispatch(getOrderedPokemons(pokemons));
      return;
    }
  } catch (error) {
    alert("Error in action creator orderPokemon", error);
    console.log("Error in action creator orderPokemon", error);
  }
};

export const setCurrentPage = (pageNumber) => async (dispatch) => {
  try {
    dispatch(setPage(pageNumber));
  } catch (error) {
    alert("Error in action creator setPage", error);
    console.log("Error in action creator setPage", error);
  }
};

export const searchPokemonOperation =
  (pokemonName) => async (dispatch, getState) => {
    try {
      const allPokemons = [...getState().allPokemons];
      const filteredPokemons = allPokemons.filter(
        (pokemon) => pokemon.name.toLowerCase() === pokemonName.toLowerCase()
      );
      dispatch(getOrderedPokemons(filteredPokemons));
    } catch (error) {
      alert("Error in action creator searchPokemonOperation", error);
      console.log("Error in action creator searchPokemonOperation", error);
    }
  };
