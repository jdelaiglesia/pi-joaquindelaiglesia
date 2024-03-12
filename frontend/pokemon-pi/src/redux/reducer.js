import {
  CLEAR_POKEMONS,
  GET_POKEMONS,
  GET_SPECIFIC_POKEMON,
  GET_TYPES,
  CREATE_POKEMON,
  GET_FILTERED_POKEMONS,
  GET_ORDERED_POKEMONS,
} from "./actions";

const initialState = {
  pokemons: [],
  pokemon: {},
  types: [],
  typeFilter: "all",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case GET_SPECIFIC_POKEMON:
      return { ...state, pokemon: action.payload };
    case GET_TYPES:
      return { ...state, types: action.payload };
    case CLEAR_POKEMONS:
      return initialState;
    case CREATE_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case GET_FILTERED_POKEMONS:
      return { ...state, pokemons: action.payload.pokemons.slice(0, 15) };
    case GET_ORDERED_POKEMONS:
      let sorted;
      if (action.payload === "asc") {
        sorted = state.pokemons.sort((a, b) => a.id - b.id);
      } else if (action.payload === "desc") {
        sorted = state.pokemons.sort((a, b) => b.id - a.id);
      } else {
        sorted = state.pokemons;
      }
      return {
        ...state,
        pokemons: sorted,
      };
    default:
      return state;
  }
};

export default rootReducer;
