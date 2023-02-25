import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISearchState{
    searchValue: string,
}


const initialState:ISearchState = {
    searchValue: '',
}

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state,action:PayloadAction<string>) => {
        action.payload ? state.searchValue = action.payload : state.searchValue = ''
    },
    
  },
})


export const { setSearchValue } = SearchSlice.actions

export default SearchSlice.reducer