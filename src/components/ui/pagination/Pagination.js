import React from "react";
import { usePagination, DOTS } from "./usePagination";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage === lastPage) {
      return;
    } else {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage === 1) {
      return;
    } else {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="list-none mt-4 items-center flex justify-evenly px-5 py-0 lg:py-8">
      <li
        className="h-5 text-left text-xl rounded-2xl flex items-center justify-center"
        style={{
          "&:hover": {
            cursor: "pointer",
          },
          minWeight: "3rem",
          color: "rgba(0, 0, 0, 0.87)",
          letterSpacing: ".2rem",
        }}
        onClick={onPrevious}
      >
        {currentPage === 1 ? (
          <i className="fas fa-chevron-left text-faded-gray"></i>
        ) : (
          <i className="fas fa-chevron-left text-primary-main"></i>
        )}
      </li>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li
              className="px-2 py-1 text-2xl m-0 rounded-2xl text-center flex "
              style={{
                "&:hover": {
                  cursor: "default",
                  backgroundColor: "transparent",
                  color: "black",
                },
                lineHeight: "1",
                transition: "all .3s ease-in-out",
                letterSpacing: ".2rem",
              }}
              key={index}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={
              pageNumber === currentPage
                ? `px-2 py-1 text-lg m-0 rounded-2xl text-center flex font-bold text-primary-main`
                : "px-2 py-1 text-lg m-0 rounded-2xl text-center flex "
            }
            onClick={() => onPageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className="text-center justify-center items-center flex h-5 rounded-2xl"
        onClick={onNext}
        style={{
          "&:hover": {
            cursor: "pointer",
          },
          minWeight: "3rem",
          color: "rgba(0, 0, 0, 0.87)",
          letterSpacing: ".2rem",
        }}
      >
        {currentPage === lastPage ? (
          <i className="fas fa-chevron-right text-faded-gray"></i>
        ) : (
          <i className="fas fa-chevron-right text-primary-main"></i>
        )}
      </li>
    </ul>
  );
};

export default Pagination;
