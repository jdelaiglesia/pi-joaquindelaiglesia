import "../styles/filterOrder.css";
import "../styles/fonts.css";

import { useDispatch } from "react-redux";
import { filterPokemon, orderPokemon } from "../redux/operations";

const FilterOrder = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterPokemon(e.target.value));
  };

  const handleOrder = (e) => {
    dispatch(orderPokemon(e.target.value));
  };
  return (
    <div className="filterOrderContainer">
      <div className="filterOrderBody">
        <div className="filterOrderContentItem">
          <label className="lato-regular filterOrderContentItem">
            Filter by Type
          </label>
          <select name="type" id="type" onChange={handleFilter}>
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
          <select name="order" id="order" onChange={handleOrder}>
            <option value="asc">A-Z (Ascending)</option>
            <option value="desc">Z-A (Descending)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterOrder;
