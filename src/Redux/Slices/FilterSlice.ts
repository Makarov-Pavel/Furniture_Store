import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getSearchParamsFromSS } from '../../utils/getSearchParamsFromSS'

type ItemType = {
  id: number,
  name: string,
  img: string,
  description: string,
  price: string,
  type: string
}
type SortType = 'Popular' | 'Low' | 'Hight'

interface IFilterState {
  type: string,
  sort: SortType,
  items: ItemType[],
  isLoading: boolean
}

const initialState: IFilterState = {
  type: getSearchParamsFromSS().type,
  sort: getSearchParamsFromSS().sortBy,
  items: [],
  isLoading: true
}

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload
    },
    setItems: (state, action: PayloadAction<ItemType[]>) => {
      state.items = action.payload
    },
    changeIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  },
})


export const { setType, setSort, setItems, changeIsLoading } = FilterSlice.actions

export default FilterSlice.reducer