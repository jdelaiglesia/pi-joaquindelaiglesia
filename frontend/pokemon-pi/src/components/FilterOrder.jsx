import "../styles/filterOrder.css";
import "../styles/fonts.css";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterPokemon,
  orderPokemon,
  setCurrentPage,
} from "../redux/operations";

const FilterOrder = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("id");
  const [type, setType] = useState("all");

  const handleFilter = (e) => {
    setType(e.target.value);
    dispatch(setCurrentPage(0));
    dispatch(filterPokemon(0, 15, e.target.value));
  };

  const handleOrder = (e) => {
    setOrder(e.target.value);
    dispatch(orderPokemon(e.target.value));
  };

  const resetFilters = () => {
    dispatch(filterPokemon(0, 15, "all"));
    setOrder("id");
    setType("all");
  };

  return (
    <div className="filterOrderContainer">
      <div className="filterOrderBody">
        <div className="filterOrderContentItem">
          <label className="lato-regular filterOrderContentItem">
            Filter by Type
          </label>
          <select name="type" id="type" value={type} onChange={handleFilter}>
            <option value="all">All</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
          </select>
        </div>
        <div className="filterOrderContentItem">
          <label className="lato-regular filterOrderContentItem">
            Order by
          </label>
          <select name="order" id="order" value={order} onChange={handleOrder}>
            <option value="id">Pokémon ID</option>
            <option value="asc">A-Z (Ascending)</option>
            <option value="desc">Z-A (Descending)</option>
          </select>
        </div>
        <div className="filterOrderResetButton">
          <button onClick={resetFilters}>Reset Filters</button>
        </div>
      </div>
    </div>
  );
};

export default FilterOrder;
