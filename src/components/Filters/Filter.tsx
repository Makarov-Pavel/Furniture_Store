import { useEffect, useRef, useState } from "react";
import Main from "../Main/Main";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import "./Filter.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux";
import { setSort, setType } from "../../Redux/Slices/FilterSlice";
import { changeIsLoading, setItems } from "../../Redux/Slices/FilterSlice";
import { RootState } from "../../Redux/store";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setCurrentPage } from "../../Redux/Slices/PaginationSlice";

const Filter: React.FC = React.memo(() => {
  const [sortBlockOpen, setSortBlockOpen] = useState(false);
  const { type, sort } = useSelector((state: RootState) => state.FilterSlice);
  const searchValue = useSelector(
    (state: RootState) => state.SearchSlice.searchValue
  );
  const currentPage = useSelector(
    (state: RootState) => state.PaginationSlice.currentPage
  );
  const limitOnPage = 6;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const refFirstRender = useRef(true);

  useEffect(() => {
    dispatch(changeIsLoading(true));
    let urlParams =''

    if(refFirstRender.current) {
      urlParams = location.search
      refFirstRender.current = false
    }else{
      const newUrlParams = new URLSearchParams();

    newUrlParams.set("page", `${currentPage}`);
    newUrlParams.set("limit", `${limitOnPage}`);
    sort === "Low" &&
      (newUrlParams.set("sortBy", "price"), newUrlParams.set("order", "asc"));
    sort === "Hight" &&
      (newUrlParams.set("sortBy", "price"), newUrlParams.set("order", "desc"));
    type !== "all" && newUrlParams.set("type", `${type}`);
    searchValue && newUrlParams.set("search", `${searchValue}`);

    urlParams = `?${newUrlParams.toString()}`;
    sessionStorage.setItem(
      "searchParams",
      JSON.stringify({
        page: currentPage,
        limit: limitOnPage,
        sortBy: sort,
        search: searchValue,
        type: type,
      })
    );

    navigate(urlParams);
    }

    axios
      .get(`https://63e25b54109336b6cb05d56b.mockapi.io/items${urlParams}`)
      .then((arr) => {
        dispatch(setItems(arr.data));
        dispatch(changeIsLoading(false));
      })
      .catch((err) => alert(err.message));

  }, [type, currentPage, searchValue, sort, location.search]);

  return (
    <div className="filter-container">
      <div className="filters">
        <h4
          className={`filter-title ${type === "all" ? "filter-active" : ""}`}
          onClick={() => {
            dispatch(setType("all"));
            dispatch(setCurrentPage(1));
          }}
        >
          All
        </h4>
        <h4
          className={`filter-title ${type === "d" ? "filter-active" : ""}`}
          onClick={() => {
            dispatch(setType("d"));
            dispatch(setCurrentPage(1));
          }}
        >
          Dressers
        </h4>
        <h4
          className={`filter-title ${type === "a" ? "filter-active" : ""}`}
          onClick={() => {
            dispatch(setType("a"));
            dispatch(setCurrentPage(1));
          }}
        >
          Armchairs
        </h4>
        <h4
          className={`filter-title ${type === "s" ? "filter-active" : ""}`}
          onClick={() => {
            dispatch(setType("s"));
            dispatch(setCurrentPage(1));
          }}
        >
          Sofas
        </h4>

        <div className="sorts">
          <h4 className="sort-by-text">Sort by:</h4>
          <span
            className="current-sort"
            onClick={() => setSortBlockOpen((prev) => !prev)}
          >
            {sort === "Low" ? "ASC" : sort === "Hight" ? "DESC" : "Popular"}
          </span>
          {sortBlockOpen ? (
            <RiArrowDropDownLine className="dropdown-icon" />
          ) : (
            <RiArrowDropUpLine className="dropdown-icon" />
          )}
          {sortBlockOpen && (
            <div className="sort-variants">
              <span
                className={`sort-title`}
                onClick={() => {
                  dispatch(setSort("Low"));
                  setSortBlockOpen(false);
                  dispatch(setCurrentPage(1));
                }}
              >
                ASC
              </span>
              <span
                className={`sort-title`}
                onClick={() => {
                  dispatch(setSort("Hight"));
                  setSortBlockOpen(false);
                  dispatch(setCurrentPage(1));
                }}
              >
                DESC
              </span>
              <span
                className={`sort-title`}
                onClick={() => {
                  dispatch(setSort("Popular"));
                  setSortBlockOpen(false);
                  dispatch(setCurrentPage(1));
                }}
              >
                Popular
              </span>
            </div>
          )}
        </div>
      </div>

      <Main />
    </div>
  );
});

export default Filter;
