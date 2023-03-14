import "./Header.css";
import { SlBasket } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import {useSelector} from "react-redux/es/hooks/useSelector";
import { RootState } from "../../Redux/store";
import React, { useEffect, useRef } from "react";
import { onClickHeaderLogo } from "../../utils/onClickHeaderLogo";

const Header:React.FC = React.memo(() =>{
  const inBasket = useSelector((state:RootState)=>state.HeaderSlice.inBasket)
  const location = useLocation()
  const refFirstLoading = useRef(true)
  

  useEffect(()=>{
    if(!refFirstLoading.current){
      const json = JSON.stringify(inBasket)
      localStorage.setItem('basket', json)
    }
    refFirstLoading.current = false
  },[inBasket])


  let allItemsCount:number = 0;
  inBasket.map(el => allItemsCount += el.count!)

  return (
    <header className="header">
      <div className="header__logo">
        <a href={`/Furniture_Store/?page=1&limit=6`} onClick={()=>onClickHeaderLogo()}>
          <img src="images/logo.png" alt="logo"></img>
        </a>
      </div>
       {location.pathname === '/' && <Search />}
      <div className="header__menu">
        <ul className="menu__list">
          <li className={`menu__item ${location.pathname === '/Furniture_Store/contact' ? 'activeMenuItem' :''}`}>
            <Link to="/Furniture_Store/contact">Contact us</Link>{" "}
          </li>
          <li className={`menu__item ${location.pathname === '/Furniture_Store/profile' ? 'activeMenuItem' :''}`}>
            <Link to="/Furniture_Store/profile">Profile</Link>{" "}
          </li>
          <li className={`menu__item ${location.pathname === '/Furniture_Store/basket' ? 'activeMenuItem' :''}`}>
          <Link to="/Furniture_Store/basket"><SlBasket />{allItemsCount}</Link>
          </li>
        </ul>
      </div>
    </header>
  );
})

export default Header;
