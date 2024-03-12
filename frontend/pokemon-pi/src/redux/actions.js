import {
  GET_POKEMONS,
  GET_SPECIFIC_POKEMON,
  GET_TYPES,
  CLEAR_POKEMONS,
  CREATE_POKEMON,
  GET_FILTERED_POKEMONS,
  GET_ORDERED_POKEMONS,
} from "./action-types";
export {
  GET_POKEMONS,
  GET_SPECIFIC_POKEMON,
  GET_TYPES,
  CLEAR_POKEMONS,
  CREATE_POKEMON,
  GET_FILTERED_POKEMONS,
  GET_ORDERED_POKEMONS,
};

export const getPokemons = (pokemons) => ({
  type: GET_POKEMONS,
  payload: pokemons,
});

export const getSpecificPokemon = (pokemon) => ({
  type: GET_SPECIFIC_POKEMON,
  payload: pokemon,
});

export const getTypes = (types) => ({
  type: GET_TYPES,
  payload: types,
});

export const clearPokemons = () => ({
  type: CLEAR_POKEMONS,
});

export const createPokemon = (pokemon) => ({
  type: CREATE_POKEMON,
  payload: pokemon,
});

export const getFilteredPokemons = (pokemons, typeFilter) => ({
  type: GET_FILTERED_POKEMONS,
  payload: {
    pokemons,
    typeFilter,
  },
});

export const getOrderedPokemons = (pokemons) => ({
  type: GET_ORDERED_POKEMONS,
  payload: pokemons,
});
