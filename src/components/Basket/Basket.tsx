import "./Basket.css";
import {BsTrash} from 'react-icons/bs'
import { onAddBasketItem, onRemoveItem, removeFromBasket,clearBasket } from "../../Redux/Slices/HeaderSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../Redux/store";
import { useMemo } from "react";

interface IBasketElement{
  id: number,
  name: string,
  img: string,
  count?:number,
  price: string
}


const Basket:React.FC =() =>{
  const {inBasket, sum} = useSelector((state:RootState) => state.HeaderSlice)
  const dispatch = useDispatch()


  let allBasketItems:number = 0;
  useMemo(() => inBasket.map(el => allBasketItems += el.count!), [inBasket])
  
  return (
      <div className="basketContainer">
        {inBasket.length !== 0 && <div className="clearBasketContainer">
          <span>In basket: <b>{allBasketItems}</b> items</span>
          <button type="button" className="clearBasketBtn" onClick={() => dispatch(clearBasket())}>Clear basket</button>
          </div>
        }
        {<div className="basketItems">
            {inBasket.map((el:IBasketElement) => (
              <div key={el.id} className="basketItem">
                <h2>{el.name}</h2>
                <img src={el.img} alt="123"></img>
                <div className="counterContainer">
                  <button type="button" className= {`counterBtn ${el.count === 1 ? 'counterBtn-one' : ''} `} onClick={()=>dispatch(onRemoveItem(el))}>-</button>
                  <span>{el.count}</span>
                  <button type="button" className="counterBtn" onClick={()=>dispatch(onAddBasketItem(el))}>+</button>
                </div>
                <div className="basketItem__price" >
                  <span>Price: {Number(el.price)* el.count!} $</span>
                  <BsTrash className="basketItem__trashIcon" onClick={() =>  dispatch(removeFromBasket(el))} />
                </div>
              </div>
            ))}

            {inBasket.length === 0 && <div className='emptyBasket'>Empty</div>}
            {inBasket.length !== 0 && sum !== 0 && 
              <>
              <div className='totalContainer'>
                <p>Total: <span>{sum}</span> $</p>
                <button type="button" className="confirmBtn" >К оплате</button>
              </div>
              </>
            }
          </div>
        }
      </div>
  );
}

export default Basket;
