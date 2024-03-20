import axios from "axios";
import {
  getPokemons,
  getSpecificPokemon,
  clearPokemons,
  getTypes,
  createPokemon,
  getFilteredPokemons,
  setPage,
  setFilter,
} from "./actions";

const URL = "http://localhost:3001/api";

export const fetchPokemons = (start, end) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${URL}/pokemons/?start=${start}&end=${end}`
    );
    dispatch(getPokemons(response.data));
  } catch (error) {
    alert("Error in action creator fetchPokemons", error);
    console.log("Error in action creator fetchPokemons", error);
  }
};

export const fetchSpecificPokemon = (pokemonName) => async (dispatch) => {
  try {
    console.log(pokemonName);
    const response = await axios.get(`${URL}/pokemons/${pokemonName}`);
    console.log(response.data);
    return dispatch(getSpecificPokemon(response.data));
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

export const orderPokemon = () => async (dispatch) => {
  try {
    console.log("orderPokemon");
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
