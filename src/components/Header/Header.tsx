import { useEffect } from "react";
import "./Header.css";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { getAllItemsCount } from "../../Redux/Slices/HeaderSlice";
import { RootState } from "../../Redux/store";

const Header:React.FC =() =>{
  const dispatch = useDispatch()
  const {inBasket, allItemsCount} = useSelector((state:RootState)=>state.HeaderSlice)

  useEffect(()=>{
    dispatch(getAllItemsCount())
  },[inBasket,dispatch])

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/?page=1&limit=6&status=all&sort=sortPopular">
          <img src="/images/logo.png" alt="logo"></img>
        </Link>
      </div>
      <Search />
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
}

export default Header;
