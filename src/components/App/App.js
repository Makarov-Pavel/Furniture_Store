import Filter from "../Filters/Filter";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import InformationAbout from "../InformationAbout/InformationAbout";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import "./App.css";
import axios from 'axios'
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { changeIsLoading, setItems } from "../../Redux/Slices/FilterSlice";
import Basket from "../Basket/Basket";


function App() {
  const navigate = useNavigate()
  const searchValue = useSelector(state => state.SearchSlice.searchValue)
  const {status, sort} = useSelector(state => state.FilterSlice)
  const [currentPage,setCurrentPage] = useState(1)
  const limitOnPage = 6;

  const dispatch = useDispatch()
  
  //URL params
  useEffect(() => {
    const searchObj = {
      page:currentPage,
      limit: limitOnPage,
      type: status,
      sort: sort,
      name: searchValue
    }

  const searchParams = new URLSearchParams(searchObj)
  if(!searchValue) searchParams.delete('name')
  navigate(`?${searchParams.toString()}`)
    
  }, [currentPage,status,sort,searchValue])
  
  //query
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
      .then(arr => dispatch(setItems(arr.data)))
      .catch(err => console.log(err.message))
      dispatch(changeIsLoading(false))
  }, [status, currentPage, searchValue, sort, dispatch]);

  
  
  return (
    <div className="App">
        <Header />
        <InformationAbout/>
        <Routes>
          <Route
            path= "/"
            element={
              <>
                <Filter  setCurrentPage={setCurrentPage}/>
                <Pagination
                  onChangePage={(number) => setCurrentPage(number)}
                />
              </>
            }
          />
          <Route
            path="/profile"
            element={<div className="notFound">PROFILE</div>}
          />
          <Route
            path="/about"
            element={<div className="notFound">ABOUT US</div>}
          />
          <Route
            path="/basket"
            element={<Basket />}
          />
          <Route
            path="/contact"
            element={<div className="notFound">CONTACT US</div>}
          />
        </Routes>
      <Footer className="footer" />
    </div>
  );
}
export default App;
