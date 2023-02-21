import React from "react";
import "./Basket.css";
import {BsTrash} from 'react-icons/bs'
import { onAddBasketItem, onRemoveItem, removeFromBasket,clearBasket } from "../../Redux/Slices/HeaderSlice";
import { useDispatch, useSelector } from "react-redux";


function Basket(props) {
  const {inBasket, sum} = useSelector(state => state.HeaderSlice)
  const dispatch = useDispatch()
  
  return (
    <div>
      <div>
        {inBasket.length !== 0 && <button className="clearBasketBtn" onClick={() => dispatch(clearBasket())}>Clear basket</button>}
        {<div className="basketItems">
            {inBasket.map((el) => (
              <div key={el.id} className="basketItem">
                <h2>{el.name}</h2>
                <img src={el.img} alt="123"></img>
                <div className="counterContainer">
                  <button className="counterBtn" onClick={()=>dispatch(onRemoveItem(el))}>-</button>
                  <span>{el.count}</span>
                  <button className="counterBtn" onClick={()=>dispatch(onAddBasketItem(el))}>+</button>
                </div>
                <div className="basketItem__price" >
                  <span>Price: {el.price * el.count} $</span>
                  <BsTrash className="basketItem__trashIcon" onClick={() =>  dispatch(removeFromBasket(el))} />
                </div>
              </div>
            ))}

            {inBasket.length === 0 && <div className='emptyBasket'>Empty</div>}
            {inBasket.length !== 0 && sum !== 0 && 
              <>
              <div className='totalContainer'>
                <p>Total: <span>{sum}</span> $</p>
                <button className="confirmBtn" >К оплате</button>
              </div>
              </>
            }
          </div>
        }
      </div>
      
    </div>
  );
}

export default Basket;
