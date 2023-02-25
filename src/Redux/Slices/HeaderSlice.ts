import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BasketItemType = {
    id: number,
    name: string,
    img: string,
    count?:number,
    price: string
}

interface IHeaderState {
    inBasket: BasketItemType[],
    sum: number,
    allItemsCount: number
}

const initialState:IHeaderState = {
    inBasket: [],
    sum: 0,
    allItemsCount: 0
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
        if(window.confirm('Are you sure about this action?')) state.inBasket = []
    },
    getAllItemsCount: (state) => {
        state.allItemsCount = state.inBasket.reduce((acc,el) => acc + el.count!,0) 
    }
  },
})


export const {onAddBasketItem, onRemoveItem, removeFromBasket, clearBasket, getAllItemsCount} = HeaderSlice.actions

export default HeaderSlice.reducer