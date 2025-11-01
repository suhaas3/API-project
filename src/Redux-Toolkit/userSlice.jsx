import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticate: false,
  userDetails: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const userData = action.payload;
      state.userDetails=action.payload;
      state.isAuthenticate = true;
    },
    removeUser: (state) => {
      return null
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer