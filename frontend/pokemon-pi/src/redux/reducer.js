import {
  CLEAR_POKEMONS,
  GET_POKEMONS,
  GET_SPECIFIC_POKEMON,
  GET_TYPES,
  CREATE_POKEMON,
  GET_FILTERED_POKEMONS,
  GET_ORDERED_POKEMONS,
  SET_PAGE,
  SET_FILTER,
  SEARCH_POKEMON,
} from "./actions";

const initialState = {
  allPokemons: [],
  pokemons: [],
  pokemon: {},
  types: [],
  typeFilter: "all",
  count: 0,
  pokemonName: "",
  pageNumber: 0,
};

const rootReducer = (state = initialState, action) => {
  console.log("Action received in pokemonReducer:", action);
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload.pokemons,
        pokemons: action.payload.pokemons,
        count: action.payload.count,
      };
    case GET_SPECIFIC_POKEMON:
      return { ...state, pokemon: action.payload };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case CLEAR_POKEMONS:
      // return { ...state, pokemons: [] };
      return state;
    case CREATE_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case GET_FILTERED_POKEMONS:
      return {
        ...state,
        pokemons: action.payload.pokemons.pokemons,
        count: action.payload.pokemons.count,
      };
    case GET_ORDERED_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        pageNumber: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        typeFilter: action.payload,
      };
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemonName: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
