import {
  GET_POKEMONS,
  GET_SPECIFIC_POKEMON,
  GET_TYPES,
  CLEAR_POKEMONS,
  CREATE_POKEMON,
  GET_FILTERED_POKEMONS,
  GET_ORDERED_POKEMONS,
  SET_PAGE,
  SET_FILTER,
  SEARCH_POKEMON,
} from "./action-types";
export {
  GET_POKEMONS,
  GET_SPECIFIC_POKEMON,
  GET_TYPES,
  CLEAR_POKEMONS,
  CREATE_POKEMON,
  GET_FILTERED_POKEMONS,
  GET_ORDERED_POKEMONS,
  SET_PAGE,
  SET_FILTER,
  SEARCH_POKEMON,
};

export const setPokemons = (pokemons) => ({
  type: GET_POKEMONS,
  payload: pokemons,
});

export const setAllPokemons = (allPokemons) => ({
  type: GET_POKEMONS,
  payload: allPokemons,
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

export const setPage = (pageNumber) => ({
  type: SET_PAGE,
  payload: pageNumber,
});

export const setFilter = (typeFilter) => ({
  type: SET_FILTER,
  payload: typeFilter,
});

export const searchPokemon = (pokemon) => ({
  type: SEARCH_POKEMON,
  payload: pokemon,
});
