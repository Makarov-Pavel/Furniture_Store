import { BasketItemType } from "../Redux/Slices/HeaderSlice";

export const getBasketFromLS = () =>{
    const data = localStorage.getItem('basket');
    const basket:BasketItemType[] =  data ? JSON.parse(data) : []
    let sum:number = 0
    basket[0] !== undefined && basket.map(el => sum += (+el.price * el.count!))

    return {
        basket,
        sum
    }
}