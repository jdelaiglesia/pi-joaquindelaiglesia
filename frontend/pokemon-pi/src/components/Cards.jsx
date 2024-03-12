import Card from "./Card";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../redux/operations";

import "../styles/cards.css";
import "../styles/fonts.css";

const Cards = ({ page }) => {
  let pageNumber = Number(page) - 1;
  if (pageNumber < 0 || pageNumber > 10) {
    pageNumber = 0;
  }
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons(pageNumber * 15, (pageNumber + 1) * 15));
  }, [dispatch, pageNumber]);

  if (!pokemons || pokemons.length === 0) {
    return (
      <div className="cardsContainer">
        <h1 className="lato-black">
          <img src="/loading.gif" alt="Cargando..." srcset="" />
        </h1>
      </div>
    );
  }

  console.log(pokemons);

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
