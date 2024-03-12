import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, fetchTypes } from "../redux/operations";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import "../styles/createPokemon.css";

const CreatePokemon = () => {
  const [pokemon, setPokemon] = useState({
    name: "",
    type1: "",
    type2: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  const [errorValidate, setErrorValidate] = useState({
    name: "",
    type1: "",
    type2: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  const [validForm, setValidForm] = useState(true);

  const types = useSelector((state) => state.types);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const disableSubmitButton = (errorValidate, pokemon) => {
    for (let key in errorValidate) {
      if (errorValidate[key] !== "") {
        setValidForm(true);
        return;
      }
    }
    for (let key in pokemon) {
      if (pokemon[key] === "") {
        setValidForm(true);
        return;
      }
    }
    setValidForm(false);
  };

  const validatePokemon = (event) => {
    switch (event.target.name) {
      case "name":
        event.target.value < 3
          ? setErrorValidate({
              ...errorValidate,
              name: "Name must be at least 3 characters long.",
            })
          : setErrorValidate({ ...errorValidate, name: "" });
        break;
      case "type1":
        event.target.value === ""
          ? setErrorValidate({
              ...errorValidate,
              type1: "You must select a type.",
            })
          : setErrorValidate({ ...errorValidate, type1: "" });
        break;
      case "type2":
        event.target.value === pokemon.type1
          ? setErrorValidate({
              ...errorValidate,
              type2: "Type 2 must be different from Type 1.",
            })
          : setErrorValidate({ ...errorValidate, type2: "" });
        break;
      case "image":
        event.target.value === ""
          ? setErrorValidate({
              ...errorValidate,
              image: "You must enter an image URL.",
            })
          : setErrorValidate({ ...errorValidate, image: "" });
        break;
      case "hp":
        event.target.value < 1 || event.target.value > 255
          ? setErrorValidate({
              ...errorValidate,
              hp: "HP must be between 1 and 255.",
            })
          : setErrorValidate({ ...errorValidate, hp: "" });
        break;
      case "attack":
        event.target.value < 1 || event.target.value > 255
          ? setErrorValidate({
              ...errorValidate,
              attack: "Attack must be between 1 and 255.",
            })
          : setErrorValidate({ ...errorValidate, attack: "" });
        break;
      case "defense":
        event.target.value < 1 || event.target.value > 255
          ? setErrorValidate({
              ...errorValidate,
              defense: "Defense must be between 1 and 255.",
            })
          : setErrorValidate({ ...errorValidate, defense: "" });
        break;
      case "speed":
        event.target.value < 1 || event.target.value > 255
          ? setErrorValidate({
              ...errorValidate,
              speed: "Speed must be between 1 and 255.",
            })
          : setErrorValidate({ ...errorValidate, speed: "" });
        break;
      case "height":
        event.target.value < 1 || event.target.value > 500
          ? setErrorValidate({
              ...errorValidate,
              height: "Height must be between 1 and 500.",
            })
          : setErrorValidate({ ...errorValidate, height: "" });
        break;
      case "weight":
        event.target.value < 1 || event.target.value > 500
          ? setErrorValidate({
              ...errorValidate,
              weight: "Weight must be between 1 and 500.",
            })
          : setErrorValidate({ ...errorValidate, weight: "" });
        break;
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    const updatedPokemon = {
      ...pokemon,
      [e.target.name]: e.target.value,
    };
    validatePokemon(e);
    disableSubmitButton(errorValidate, updatedPokemon);
    // checkDisableError(errorValidate);
    setPokemon(updatedPokemon);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPokemon(pokemon));
    navigate(`/pokemon/${pokemon.name}`);
  };

  return (
    <div className="createPokemonContainer">
      <div className="createPokemonHeader">
        <Navbar />
      </div>
      <div className="createPokemonBody">
        <div className={"createPokemonError lato-regular-italic"}>
          <ul>
            {Object.keys(errorValidate).map((key) => {
              if (errorValidate[key] !== "") {
                return <li key={key}>{errorValidate[key]}</li>;
              } else {
                return null;
              }
            })}
          </ul>
        </div>
        <form
          className="createPokemonForm lato-regular"
          onSubmit={handleSubmit}
        >
          <label className="createPokemonFormField lato-bold">
            Name:
            <input
              type="text"
              name="name"
              value={pokemon.name}
              onChange={handleChange}
              className="createPokemonFormField"
            />
          </label>
          <div className="createPokemonTypeSelector">
            <label className="createPokemonFormField lato-bold">
              Type 1:
              <select
                name="type1"
                value={pokemon.type1}
                onChange={handleChange}
                className="createPokemonFormField"
              >
                <option value="">Select a type</option>
                {types.map((type) => (
                  <option key={type.id} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="createPokemonFormField lato-bold">
              Type 2:
              <select
                name="type2"
                value={pokemon.type2}
                onChange={handleChange}
                className="createPokemonFormField"
              >
                <option value="">Select a type</option>
                {types.map((type) => (
                  <option key={type.id} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="createPokemonFormField lato-bold">
            Image (URL):
            <input
              type="text"
              name="image"
              value={pokemon.image}
              onChange={handleChange}
              className="createPokemonFormField"
            />
          </label>
          <label className="createPokemonFormField lato-bold">
            HP:
            <input
              type="number"
              name="hp"
              value={pokemon.hp}
              onChange={handleChange}
              className="createPokemonFormField"
            />
          </label>
          <label className="createPokemonFormField lato-bold">
            Attack:
            <input
              type="number"
              name="attack"
              value={pokemon.attack}
              onChange={handleChange}
              className="createPokemonFormField"
            />
          </label>
          <label className="createPokemonFormField lato-bold">
            Defense:
            <input
              type="number"
              name="defense"
              value={pokemon.defense}
              onChange={handleChange}
              className="createPokemonFormField"
            />
          </label>
          <label className="createPokemonFormField lato-bold">
            Speed:
            <input
              type="number"
              name="speed"
              value={pokemon.speed}
              onChange={handleChange}
              className="createPokemonFormField"
            />
          </label>
          <label className="createPokemonFormField lato-bold">
            Height:
            <input
              type="number"
              name="height"
              value={pokemon.height}
              onChange={handleChange}
              className="createPokemonFormField"
            />
          </label>
          <label className="createPokemonFormField lato-bold">
            Weight:
            <input
              type="number"
              name="weight"
              value={pokemon.weight}
              onChange={handleChange}
              className="createPokemonFormField"
            />
          </label>
          <button
            className="createPokemonSubmitButton lato-black"
            type="submit"
            disabled={validForm}
          >
            Create Pokémon
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePokemon;
