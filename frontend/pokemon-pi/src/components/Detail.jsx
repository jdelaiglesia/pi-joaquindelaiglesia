import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSpecificPokemon } from "../redux/operations";
import Navbar from "./Navbar";

import "../styles/detail.css";
import "../styles/fonts.css";

const Detail = () => {
  const params = useParams();
  const pokemon = useSelector((state) => state.pokemon);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(params.name);
    dispatch(fetchSpecificPokemon(params.name));
    return () => {
      //TODO empty pokemon state
    };
  }, [dispatch]);

  try {
    if (
      (Object.keys(pokemon).length === 0 && pokemon.constructor === Object) ||
      pokemon === null
    ) {
      return (
        <div className="detailContainer">
          <div className="detailHeader">
            <Navbar></Navbar>
          </div>
          <div className="detailBody">
            <img src="/loading.gif" alt="Cargando..." srcSet="" />
          </div>
        </div>
      );
    }
  } catch (error) {
    console.log("Error en el detalle ", error);
  }

  return (
    <div className="detailContainer">
      <div className="detailHeader">
        <Navbar></Navbar>
      </div>
      <div
        className={
          "detailBody " +
          "detailBackground" +
          (pokemon.types
            ? pokemon.types[0].type.name[0].toUpperCase() +
              pokemon.types[0].type.name.substring(1)
            : pokemon.type1[0].toUpperCase() + pokemon.type1.substring(1)) // Reemplaza 'Default Value' con el valor o manejo de error que prefieras
        }
      >
        <div className="detailLeftColumn">
          <h1 className="detailTitle lato-black">{`#${
            pokemon.types ? pokemon.id : "???"
          } ${pokemon.name}`}</h1>
          <div className="detailTypeContainer">
            <img
              src={
                pokemon.types
                  ? `/types/${pokemon.types[0].type.name}.png`
                  : `/types/${pokemon.type1}.png`
              }
              alt=""
            />
            <img
              src={
                pokemon.types
                  ? pokemon.types[1]
                    ? `/types/${pokemon.types[1].type.name}.png`
                    : ""
                  : `/types/${pokemon.type2}.png`
              }
              alt=""
            />
          </div>
          <img
            className="detailImage"
            //prettier-ignore
            src={pokemon.sprites ? pokemon.sprites.other.dream_world.front_default : pokemon.image}
            alt={pokemon.name}
          />
        </div>
        <div className="detailRightColumn">
          {pokemon.types ? (
            <div className="detailText vt323-regular">
              <p>HP: {pokemon.stats[0].base_stat}</p>
              <p>Attack: {pokemon.stats[1].base_stat}</p>
              <p>Defense: {pokemon.stats[2].base_stat}</p>
              <p>Speed: {pokemon.stats[5].base_stat}</p>
              <p>Height: {pokemon.height} ft</p>
              <p>Weight: {pokemon.weight} lbs</p>
            </div>
          ) : (
            pokemon.type1 && (
              <div className="detailText vt323-regular">
                <p>HP: {pokemon.hp}</p>
                <p>Attack: {pokemon.attack}</p>
                <p>Defense: {pokemon.defense}</p>
                <p>Speed: {pokemon.speed}</p>
                <p>Height: {pokemon.height} ft</p>
                <p>Weight: {pokemon.weight} lbs</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
