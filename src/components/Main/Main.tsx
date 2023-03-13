import './Main.css';
import Skeleton from "./Skeleton";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { onAddBasketItem } from "../../Redux/Slices/HeaderSlice";
import { RootState } from '../../Redux/store';
import React from 'react';



export interface IMainElement{
        id: number,
        name: string,
        img: string,
        description: string,
        price: string,
    }


const Main:React.FC = () =>{
    const searchValue = useSelector((state:RootState) => state.SearchSlice.searchValue)
    const {items,isLoading} = useSelector((state:RootState) => state.FilterSlice)
    const dispatch = useDispatch()

    return(
        <div className='main-container'>
            {isLoading && [...new Array(5)].map((_,i)=><Skeleton key={i}/>)}

            {searchValue && !isLoading && items.map((el:IMainElement) => 
                <div key={el.id} className='main-item'>
                    <h2>{el.name}</h2>
                    <img src={el.img} alt='213'></img>
                    <p>{el.description}</p>
                    <span>{el.price}</span>
                    <button type='button' className="main-addBtn" onClick={()=>dispatch(onAddBasketItem(el))}>Add to basket</button>
                </div>
            )}

            {!isLoading && !searchValue && items.map((el:IMainElement) => 
                <div key={el.id} className='main-item'>
                    <h2>{el.name}</h2>
                    <img src={el.img} alt='213'></img>
                    <p>{el.description}</p>
                    <span>{el.price}</span>
                    <button type='button' className="main-addBtn" onClick={()=>dispatch(onAddBasketItem(el))}>Add to basket</button>
                </div>
            )}

        </div>
    )
} 

export default Main