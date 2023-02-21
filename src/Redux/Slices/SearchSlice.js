import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchValue: '',
}

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state,action) => {
        action.payload ? state.searchValue = action.payload : state.searchValue = ''
    },
    
  },
})


export const { setSearchValue } = SearchSlice.actions

export default SearchSlice.reducer