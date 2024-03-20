import Card from "./Card";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../redux/operations";

import "../styles/cards.css";
import "../styles/fonts.css";

const Cards = ({ page }) => {
  // let pageNumber = Number(page) - 1;
  let pageNumber = useSelector((state) => state.pageNumber);
  let filterType = useSelector((state) => state.typeFilter);
  let pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterType === "all") {
      dispatch(fetchPokemons(pageNumber * 15, (pageNumber + 1) * 15));
    }
  }, [dispatch, pageNumber]);

  if (!pokemons) {
    return (
      <div className="cardsContainer">
        <h1 className="lato-black">
          <img src="/loading.gif" alt="Cargando..." srcSet="" />
        </h1>
      </div>
    );
  }

  if (pokemons.length > 15) {
    pokemons = pokemons.slice(pageNumber * 15, (pageNumber + 1) * 15);
  }

  return (
    <div className="cardsContainer">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          type1={pokemon.type1}
          type2={pokemon.type2}
        />
      ))}
    </div>
  );
};

export default Cards;
