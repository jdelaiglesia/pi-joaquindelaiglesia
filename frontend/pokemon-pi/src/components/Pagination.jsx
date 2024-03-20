import "../styles/pagination.css";

import { setCurrentPage } from "../redux/operations";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(0);
  const paginationData = useSelector((state) => state.count);
  const filter = useSelector((state) => state.typeFilter);
  const page = useSelector((state) => state.pageNumber + 1);
  const handleOnClick = (pageNumber) => {
    setPageNumber(pageNumber - 1);
    dispatch(setCurrentPage(pageNumber - 1));
    // navigate(`/home/${pageNumber}`);
  };
  const totalPages = Math.ceil(paginationData / 15);

  useEffect(() => {
    console.log("filterType: ", filter);
  }, [page]);

  return (
    <div className="paginationContainer">
      {page > 1 && (
        <button
          className="paginationButton lato-black"
          key={1}
          onClick={() => handleOnClick(Number(pageNumber))}
        >
          ⬅
        </button>
      )}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          className={
            (index === Number(page) - 1 || (!page && index === 0)
              ? "currentPaginationButton"
              : "paginationButton") + " lato-black"
          }
          key={index + 1}
          onClick={() => handleOnClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {page < totalPages && (
        <button
          className="paginationButton lato-black"
          key={totalPages}
          onClick={() => handleOnClick(Number(pageNumber) + 2)}
        >
          ➡
        </button>
      )}
    </div>
  );
};

export default Pagination;
