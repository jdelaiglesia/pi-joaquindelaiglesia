import "../styles/navbar.css";
import "../styles/fonts.css";

import React, { useRef } from "react";

import { searchPokemonOperation } from "../redux/operations";

import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const searchInput = useRef(null);
  const dispatch = useDispatch();
  const handleSearch = () => {
    const searchValue = searchInput.current.value;
    dispatch(searchPokemonOperation(searchValue));
  };
  return (
    <>
      <div className="navbarContainer">
        <NavLink to="/home">
          <img className="bannerImage" src="/banner.png" alt="PokéSearch" />
        </NavLink>
        <div className="navbarLinks lato-bold">
          <NavLink className="navbarLink" to={`/createPokemon`}>
            <span>Create new Pokémon</span>
          </NavLink>
        </div>
        <div className="navbarSearch">
          <input type="text" placeholder="Search" ref={searchInput} />
          <button onClick={handleSearch}>Go!</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
