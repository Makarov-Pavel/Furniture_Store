import { useEffect, useState } from "react";
import Main from "../Main/Main";
import {RiArrowDropDownLine,RiArrowDropUpLine} from 'react-icons/ri'
import './Filter.css'
import { useDispatch, useSelector } from "react-redux";
import { setSort, setStatus } from "../../Redux/Slices/FilterSlice";
import { changeIsLoading, setItems } from "../../Redux/Slices/FilterSlice";
import { RootState } from "../../Redux/store";
import axios from 'axios'
import React from "react";

interface IFilterProps{
  setCurrentPage: (page:number) => void,
  currentPage: number
}


const Filter:React.FC<IFilterProps> = React.memo(({setCurrentPage,currentPage}) =>{
  const [sortBlockOpen, setSortBlockOpen] = useState(false)
  const {status, sort} = useSelector((state:RootState) => state.FilterSlice)
  const searchValue = useSelector((state:RootState) => state.SearchSlice.searchValue)
  const limitOnPage = 6;
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(changeIsLoading(true))    
    axios
    .get(
      `https://63e25b54109336b6cb05d56b.mockapi.io/items?page=${currentPage}&limit=${limitOnPage}${
        searchValue && `&name=${searchValue}`
      }${
        status === "a"
          ? "&type=a"
          : status === "d"
          ? "&type=d"
          : status === "s"
          ? "&type=s"
          : ""
      }${
        sort === "Low"
          ? "&sortBy=price&order=asc"
          : sort === "Hight"
          ? "&sortBy=price&order=desc"
          : ""
      }`)
      .then(arr => {
        dispatch(setItems(arr.data));
        dispatch(changeIsLoading(false))
      }) 
      .catch(err => alert(err.message))
  }, [status, currentPage, searchValue, sort]);

    return (
      <div className="filter-container"> 
        <div className="filters">
          <h4 className={`filter-title ${status === 'all' ? 'filter-active' : ''}`} onClick={() => {dispatch(setStatus('all')); setCurrentPage(1)}}>All</h4>
          <h4 className={`filter-title ${status === 'd' ? 'filter-active' : ''}`} onClick={() => {dispatch(setStatus('d')); setCurrentPage(1)}}>Dressers</h4>
          <h4 className={`filter-title ${status === 'a' ? 'filter-active' : ''}`} onClick={() => {dispatch(setStatus('a')); setCurrentPage(1)}}>Armchairs</h4>
          <h4 className={`filter-title ${status === 's' ? 'filter-active' : ''}`} onClick={() => {dispatch(setStatus('s')); setCurrentPage(1)}}>Sofas</h4>

          <div className="sorts">
            <h4 className="sort-by-text">Sort by:</h4>
            <span className="current-sort" onClick={() => setSortBlockOpen(prev => !prev)} >
              {
                sort === 'Low' ? 'ASC' 
                :sort === 'Hight' ? 'DESC'
                :'Popular'
              }
            </span>
            {sortBlockOpen ? <RiArrowDropDownLine className="dropdown-icon"/> : <RiArrowDropUpLine className="dropdown-icon"/> }
            {sortBlockOpen && <div className="sort-variants">  
              <span className={`sort-title`} onClick={() => {dispatch(setSort('Low')); setSortBlockOpen(false); setCurrentPage(1)}}>ASC</span>
              <span className={`sort-title`} onClick={() => {dispatch(setSort('Hight')); setSortBlockOpen(false); setCurrentPage(1)}}>DESC</span>
              <span className={`sort-title`} onClick={() => {dispatch(setSort('Popular')); setSortBlockOpen(false); setCurrentPage(1)}}>Popular</span>
              </div>
            }
          </div>
        </div>
          
        <Main />
      </div>
    );


})

export default Filter;















