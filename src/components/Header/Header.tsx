import "./Header.css";
import { SlBasket } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import {useSelector} from "react-redux/es/hooks/useSelector";
import { RootState } from "../../Redux/store";
import React, { useEffect, useMemo, useRef } from "react";

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

  const data = useMemo(()=>sessionStorage.getItem('headerLogoSearchParams'),[])
  return (
    <header className="header">
      <div className="header__logo">
        <Link to={`/${data}`} >
          <img src="/images/logo.png" alt="logo"></img>
        </Link>
      </div>
       {location.pathname === '/' && <Search />}
      <div className="header__menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/about">About us</Link>{" "}
          </li>
          <li className="menu__item">
            <Link to="/contact">Contact us</Link>{" "}
          </li>
          <li className="menu__item">
            <Link to="/profile">Profile</Link>{" "}
          </li>
          <li className="menu__item">
          <Link to="/basket"><SlBasket />{allItemsCount}</Link>
          </li>
        </ul>
      </div>
    </header>
  );
})

export default Header;
