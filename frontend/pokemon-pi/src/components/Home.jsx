import "../styles/home.css";

import { useParams } from "react-router-dom";
import { fetchTypes } from "../redux/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./Navbar";
import Cards from "./Cards";
import Pagination from "./Pagination";
import FilterOrder from "./FilterOrder";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const { pageNumber } = useParams();
  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <Navbar />
      </div>
      <div className="homeBody">
        <FilterOrder />
        <Cards page={pageNumber || 1} />
        <Pagination page={pageNumber || 1} />
      </div>
    </div>
  );
};
export default Home;
