import "../styles/pagination.css";

import { useNavigate, useParams } from "react-router-dom";

import React from "react";

const Pagination = () => {
  const navigate = useNavigate();
  let { pageNumber } = useParams();
  pageNumber = pageNumber || 1;
  const handleOnClick = (pageNumber) => navigate(`/home/${pageNumber}`);
  const totalPages = 11;

  return (
    <div className="paginationContainer">
      {pageNumber > 1 && (
        <button
          className="paginationButton lato-black"
          key={1}
          onClick={() => handleOnClick(pageNumber - 1)}
        >
          ⬅
        </button>
      )}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          className={
            (index + 1 === Number(pageNumber) || (!pageNumber && index === 0)
              ? "currentPaginationButton"
              : "paginationButton") + " lato-black"
          }
          key={index + 1}
          onClick={() => handleOnClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {pageNumber < totalPages && (
        <button
          className="paginationButton lato-black"
          key={totalPages}
          onClick={() => handleOnClick(Number(pageNumber) + 1)}
        >
          ➡
        </button>
      )}
    </div>
  );
};

export default Pagination;
