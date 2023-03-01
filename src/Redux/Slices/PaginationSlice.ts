import { createSlice } from '@reduxjs/toolkit'
import { getSearchParamsFromSS } from '../../utils/getSearchParamsFromSS'

interface IPaginationState {
  currentPage: number
}
const initialState: IPaginationState = {
  currentPage: getSearchParamsFromSS().page
}

export const PaginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    }
  },
})

export const { setCurrentPage } = PaginationSlice.actions

export default PaginationSlice.reducer