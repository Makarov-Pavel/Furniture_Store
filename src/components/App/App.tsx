import Filter from "../Filters/Filter";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import InformationAbout from "../InformationAbout/InformationAbout";
import { useCallback, useMemo, useState } from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Pagination from "../Pagination/Pagination";
import Basket from "../Basket/Basket";



const App:React.FC =() => {
  const [currentPage,setCurrentPage] = useState(1)

  const setCurrentPageMemo = useCallback((x:number) => setCurrentPage(x),[])
  

  return (
    <div className="App">
        <Header />
        <InformationAbout/>
        <Routes>
          <Route
            path= "/"
            element={
              <>
                <Filter setCurrentPage={setCurrentPageMemo} currentPage={currentPage}/>
                <Pagination
                  onChangePage={(number: number) => setCurrentPage(number)}
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
      <Footer />
    </div>
  );
}
export default App;
