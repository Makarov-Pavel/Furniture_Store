import React from "react";
import './Main.css';
import Skeleton from "./Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { onAddBasketItem } from "../../Redux/Slices/HeaderSlice";

function Main(props){
    const searchValue = useSelector(state => state.SearchSlice.searchValue)
    const {items,isLoading} = useSelector(state => state.FilterSlice)
    const dispatch = useDispatch()

    return(
        <div className='main-container'>
            {isLoading && [...new Array(5)].map((_,i)=><Skeleton key={i}/>)}

            {searchValue && !isLoading && items.map((el) => 
                <div key={el.id} className='main-item'>
                    <h2>{el.name}</h2>
                    <img src={el.img} alt='213'></img>
                    <p>{el.description}</p>
                    <span>{el.price}</span>
                    <button className="main-addBtn" onClick={()=>dispatch(onAddBasketItem(el))}>Add to basket</button>
                </div>
            )}

            {!isLoading && !searchValue && items.map((el) => 
                <div key={el.id} className='main-item'>
                    <h2>{el.name}</h2>
                    <img src={el.img} alt='213'></img>
                    <p>{el.description}</p>
                    <span>{el.price}</span>
                    <button className="main-addBtn" onClick={()=>dispatch(onAddBasketItem(el))}>Add to basket</button>
                </div>
            )}
        </div>
    )
}

export default Main