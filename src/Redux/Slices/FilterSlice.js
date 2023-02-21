import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'all',
  sort:'Popular',
  items: [],
  isLoading: true
}

export const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatus: (state,action)=>{
      state.status = action.payload
    },
    setSort: (state,action) => {
      state.sort = action.payload
    },
    setItems: (state,action)=>{
      state.items = action.payload
    },
    changeIsLoading: (state,action) => {
      state.isLoading = action.payload
    }
  },
})


export const {setStatus, setSort, setItems, changeIsLoading} = FilterSlice.actions

export default FilterSlice.reducer