import axios from "axios";
import {
  getPokemons,
  getSpecificPokemon,
  clearPokemons,
  getTypes,
  createPokemon,
  getFilteredPokemons,
} from "./actions";

const URL = "http://localhost:3001/api";

export const fetchPokemons = (start, end) => async (dispatch) => {
  try {
    dispatch(clearPokemons());
    const response = await axios.get(
      `${URL}/pokemons/?start=${start}&end=${end}`
    );
    dispatch(getPokemons(response.data));
  } catch (error) {
    alert("Error in action creator fetchSpecificPokemon", error);
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
    alert("Error in action creator fetchSpecificPokemon", error);
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

export const filterPokemon = (filterData) => async (dispatch) => {
  try {
    if (filterData === "all") {
      dispatch(fetchPokemons(0, 15));
      return;
    }
    dispatch(clearPokemons());
    const response = await axios.get(`${URL}/pokemons/?start=0&end=200`);
    console.log(response.data);
    let filtered = response.data.filter((pokemon) => {
      return pokemon.type1 === filterData;
    });
    console.log(filtered);
    dispatch(getFilteredPokemons(filtered));
  } catch (error) {
    alert("Error in action creator getFilteredPokemons", error);
    console.log("Error in action creator getFilteredPokemons", error);
  }
};

export const orderPokemon = () => async (dispatch) => {
  try {
    const response = await axios.get(`${URL}/pokemons/?start=0&end=200`);
    console.log(response.data);
    dispatch(getFilteredPokemons(response.data));
  } catch (error) {
    alert("Error in action creator getFilteredPokemons", error);
    console.log("Error in action creator getFilteredPokemons", error);
  }
};
