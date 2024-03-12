import "../styles/navbar.css";
import "../styles/fonts.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <input type="text" placeholder="Search" />
          <button>Go!</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
