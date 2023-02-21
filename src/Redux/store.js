import { configureStore } from '@reduxjs/toolkit'
import FilterSlice from './Slices/FilterSlice'
import HeaderSlice from './Slices/HeaderSlice'
import SearchSlice from './Slices/SearchSlice'

export const store = configureStore({
  reducer: {
    FilterSlice,
    HeaderSlice,
    SearchSlice
  },
})