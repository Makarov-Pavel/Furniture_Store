import { useState } from "react";

import Main from "../Main/Main";
import {RiArrowDropDownLine,RiArrowDropUpLine} from 'react-icons/ri'
import './Filter.css'
import { useDispatch, useSelector } from "react-redux";
import { setSort, setStatus } from "../../Redux/Slices/FilterSlice";
import { RootState } from "../../Redux/store";

interface IFilterProps{
  setCurrentPage: (page:number) => void,
}

const Filter:React.FC<IFilterProps> = ({setCurrentPage}) =>{
  const [sortBlockOpen, setSortBlockOpen] = useState(false)
  const {status, sort} = useSelector((state:RootState) => state.FilterSlice)
  const dispatch = useDispatch()

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


}

export default Filter;















