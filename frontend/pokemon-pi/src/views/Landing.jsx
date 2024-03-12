import "../styles/landing.css";

import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="landingContainer">
        <img src="src\assets\banner.png" alt="PokéSearch" />
        <NavLink to="/home">
          <div className="pokeballButton" />
        </NavLink>
      </div>
    </>
  );
};

export default Landing;
