import { NavLink } from "react-router-dom";

import "../styles/card.css";
import "../styles/fonts.css";

const Card = (props) => {
  return (
    <div
      className={
        "cardContainer " +
        "cardBackground" +
        props.type1[0].toUpperCase() +
        props.type1.substring(1)
      }
    >
      <NavLink className="cardLink" to={`/pokemon/${props.name}`}>
        <img className="cardSprite" src={props.image} alt="" />
      </NavLink>
      <div className="cardIdNameContainer">
        <p className="cardId lato-regular">#{props.id}</p>
        <NavLink className="cardName lato-black" to={`/pokemon/${props.name}`}>
          {props.name}
        </NavLink>
      </div>
      <div className="cardTypeContainer">
        <img className="cardImage" src={`/types/${props.type1}.png`} alt="" />
        <img
          className="cardImage"
          src={props.type2 ? `/types/${props.type2}.png` : ""}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
