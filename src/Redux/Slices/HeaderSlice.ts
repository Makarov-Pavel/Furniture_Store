import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getBasketFromLS } from '../../utils/getBasketFromLS'


export type BasketItemType = {
    id: number,
    name: string,
    img: string,
    count?:number,
    price: string
}

interface IHeaderState {
    inBasket: BasketItemType[],
    sum: number
}

const initialState:IHeaderState = {
    inBasket: getBasketFromLS().basket,
    sum: getBasketFromLS().sum,
}

export const HeaderSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    onAddBasketItem: (state,action:PayloadAction<BasketItemType>)=> {
        if(state.inBasket.find(el => el.id === action.payload.id)) state.inBasket.find(el => el.id === action.payload.id)!.count!++
        else {
            const item = {...action.payload, count: 1}
            state.inBasket = [...state.inBasket, item]
        }
        state.sum = state.sum + +action.payload.price
    },
    onRemoveItem: (state, action:PayloadAction<BasketItemType>) => {
        if(action.payload.count! > 1) {
           state.inBasket.find(el => el.id === action.payload.id)!.count!--
           state.sum = state.sum - +action.payload.price
        }
    },
    removeFromBasket: (state,action:PayloadAction<BasketItemType>) => {
        state.sum = state.sum - (+action.payload.price * action.payload.count!)
        state.inBasket = state.inBasket.filter(el => el.id !== action.payload.id)
    },
    clearBasket: (state) => {
        if(state.inBasket[0] !== undefined) {
            let counter:number = 0;
            state.inBasket.map(el => counter += el.count!)
            if(counter >= 10 && window.confirm('Are you sure about this action?')) state.inBasket = []
            if(counter < 10) state.inBasket = []
        } 
    },
  }
})


export const {onAddBasketItem, onRemoveItem, removeFromBasket, clearBasket,} = HeaderSlice.actions

export default HeaderSlice.reducer