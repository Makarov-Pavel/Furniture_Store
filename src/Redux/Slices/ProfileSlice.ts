import { createSlice } from '@reduxjs/toolkit'
import { getNameFromLS } from '../../utils/getNameFromLS'

interface IProfileSlice {
  status: string,
  name: string
}
const initialState: IProfileSlice = {
  status: 'history',
  name: getNameFromLS()
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    }
  },
})

export const { setStatus, setName } = ProfileSlice.actions

export default ProfileSlice.reducer