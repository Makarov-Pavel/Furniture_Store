import Filter from "../Filters/Filter";
import Header from "../Header/Header";
import InformationAbout from "../InformationAbout/InformationAbout";
import { lazy, Suspense, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Pagination from "../Pagination/Pagination";
const Basket = lazy(() => import("../Basket/Basket"));
const Footer = lazy(() => import("../Footer/Footer"));
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../Redux/Slices/PaginationSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const setCurrentPageMemo = useCallback(
    (x: number) => dispatch(setCurrentPage(x)),
    []
  );

  return (
    <div className="App">
      <Header />
      <InformationAbout />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter />
              <Pagination
                onChangePage={(number: number) => setCurrentPageMemo(number)}
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
          element={
            <Suspense
              fallback={
                <div className="fallbackBasket">Loading the basket...</div>
              }
            >
              <Basket />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={<div className="notFound">CONTACT US</div>}
        />
      </Routes>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};
export default App;
