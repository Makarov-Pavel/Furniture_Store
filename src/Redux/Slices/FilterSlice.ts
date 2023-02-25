import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ItemType = {
  id: number,
  name: string,
  img: string,
  description: string,
  price: string,
  type: string
}
type SortType= 'Popular' | 'Low' | 'Hight'

interface IFilterState {
  status:string,
  sort: SortType,
  items: ItemType[],
  isLoading: boolean
}

const initialState:IFilterState = {
  status: 'all',
  sort:'Popular',
  items: [],
  isLoading: true
}

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatus: (state,action:PayloadAction<string>)=>{
      state.status = action.payload
    },
    setSort: (state,action:PayloadAction<SortType>) => {
      state.sort = action.payload
    },
    setItems: (state,action:PayloadAction<ItemType[]>)=>{
      state.items = action.payload
    },
    changeIsLoading: (state,action:PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
})


export const {setStatus, setSort, setItems, changeIsLoading} = FilterSlice.actions

export default FilterSlice.reducer