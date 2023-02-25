import { configureStore } from '@reduxjs/toolkit'
// import { useDispatch } from 'react-redux'
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

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>