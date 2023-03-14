import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../Redux/Slices/PaginationSlice";
import Filter from "../Filters/Filter";
import Header from "../Header/Header";
import InformationAbout from "../InformationAbout/InformationAbout";
import { lazy, Suspense, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Pagination from "../Pagination/Pagination";

const BasketPage = lazy(() => import("../../Pages/BasketPage/BasketPage"));
const Footer = lazy(() => import("../Footer/Footer"));
const ProfilePage = lazy(() => import("../../Pages/ProfilePage/ProfilePage"));
const ContactPage = lazy(() => import("../../Pages/ContactPage/ContactPage"));

const App: React.FC = () => {
  const dispatch = useDispatch();

  const setCurrentPageMemo = useCallback((x: number) => dispatch(setCurrentPage(x)),[dispatch]);

  return (
    <div className="App">
      <Header />
      <InformationAbout />
      <Routes>
        <Route
          path="/Furniture_Store"
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
          path="/Furniture_Store/profile"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ProfilePage />
            </Suspense>
          }
        />
        <Route
          path="/Furniture_Store/basket"
          element={
            <Suspense
              fallback={
                <div className="fallbackBasket">Loading the basket...</div>
              }
            >
              <BasketPage />
            </Suspense>
          }
        />
        <Route
          path="/Furniture_Store/contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage />
            </Suspense>
          }
        />
      </Routes>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};
export default App;
