import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.login = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLogin} = loginSlice.actions

export default loginSlice.reducer